import Offers from "@/components/Offers";
const HomePage = (props) => {
  return (
    <>
      <main>
        {props.children}
        <Offers />
      </main>
    </>
  );
};

export default HomePage;
