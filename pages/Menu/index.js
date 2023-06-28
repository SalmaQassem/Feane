import classes from "../../styles/_menu.module.scss";
import Head from "next/head";
import StyledContainer from "@/components/UI/StyledContainer";
import Header from "../../components/UI/Header";
import MenuFilters from "../../components/Menu/MenuFilters";
import MenuItems from "../../components/Menu/MenuItems";
import Button from "../../components/UI/Button";
import { useState, useCallback } from "react";
import { MongoClient } from "mongodb";

const Menu = (props) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const onFilterHandler = useCallback((target) => {
    setActiveCategory(target.textContent);
  }, []);

  return (
    <>
      <Head>
        <title>Feane</title>
        <meta
          name="description"
          content="Food Ordering Web site created using next js"
        />
      </Head>
      <section className={classes.menu}>
        <StyledContainer>
          <div className="heading">
            <Header>our menu</Header>
          </div>
          <MenuFilters onFilter={onFilterHandler} />
          <MenuItems category={activeCategory} menuItems={props.data} />
          <Button href="/Menu" className={classes.viewBtn}>
            view more
          </Button>
        </StyledContainer>
      </section>
    </>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://SalmaQassem:Salma499@cluster0.xeioklz.mongodb.net/FeaneDatabase?retryWrites=true&w=majority"
  );
  const db = client.db();
  const menuCollection = db.collection("Menu");
  const menu = await menuCollection.find().toArray();
  client.close();

  return {
    props: {
      data: menu.map((item) => {
        return {
          id: item._id.toString(),
          category: item.category,
          name: item.name,
          description: item.description,
          price: item.price,
          imageUrl: item.imageUrl,
        };
      }),
    },
  };
}

export default Menu;
