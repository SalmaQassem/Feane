import Head from "next/head";
import Offers from "../components/Offers";
import Menu from "./Menu";
import About from "./About";
import BookTable from "./BookTable";
import Reviews from "../components/Reviews/Reviews";
import { MongoClient } from "mongodb";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Feane</title>
        <meta
          name="description"
          content="Food Ordering Web site created using next js"
        />
      </Head>
      <main>
        <Offers data={props.data} />
        <Menu data={props.menu} />
        <About />
        <BookTable />
        <Reviews data={props.reviews} />
      </main>
    </>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://SalmaQassem:Salma499@cluster0.xeioklz.mongodb.net/FeaneDatabase?retryWrites=true&w=majority"
  );
  const db = client.db();
  const offersCollections = db.collection("offers");
  const offers = await offersCollections.find().toArray();

  const menuCollection = db.collection("Menu");
  const menuItems = await menuCollection.find().toArray();

  const reviewsCollection = db.collection("Reviews");
  const reviews = await reviewsCollection.find().toArray();

  client.close();

  return {
    props: {
      data: offers.map((item) => ({
        id: item._id.toString(),
        percentage: item.percentage,
        title: item.title,
        imageUrl: item.imageUrl,
      })),
      menu: menuItems.map((item) => ({
        id: item._id.toString(),
        category: item.category,
        name: item.name,
        description: item.description,
        price: item.price,
        imageUrl: item.imageUrl,
      })),
      reviews: reviews.map((item) => ({
        id: item._id.toString(),
        name: item.name,
        text: item.text,
        title: item.title,
        imageUrl: item.imageUrl,
      })),
    },
  };
}
export default HomePage;
