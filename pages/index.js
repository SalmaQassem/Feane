import Offers from "@/components/Offers";
import { MongoClient } from "mongodb";

const HomePage = (props) => {
  return (
    <>
      <main>
        {props.children}
        <Offers data={props.data} />
      </main>
    </>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://SalmaQassem:Salma499@cluster0.xeioklz.mongodb.net/OffersData?retryWrites=true&w=majority"
  );
  const db = client.db();
  const offersCollections = db.collection("offers");
  const offers = await offersCollections.find().toArray();
  client.close();

  return {
    props: {
      data: offers.map((item) => ({
        id: item._id.toString(),
        percentage: item.percentage,
        title: item.title,
        imageUrl: item.imageUrl,
      })),
    },
  };
}
export default HomePage;
