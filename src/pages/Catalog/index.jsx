import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import BreadCrumbs from "../../components/BreadCrumbs";
import Contact from "../../components/Contact";
import { Container } from "../../components/Container/style";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PopularProducts from "../../components/PopularProducts";
import ProductCard from "../../components/ProductCard";
import * as Style from "./style";
import MainContext from "../../context/CartContext";
import { useParams } from "react-router-dom";
import Info from "../../components/Info";

const Catalog = () => {
  const { type } = useParams();
  const [data, setData] = useState([]);
  const { cartItems } = useContext(MainContext);
  const { likeItems } = useContext(MainContext);
  const categoryText = type.toLocaleLowerCase();

  async function getData() {
    const res = await axios.get(
      `${process.env.REACT_APP_MAIN_URL}?category=${categoryText}`
    );

    if ((res.status = 200)) {
      setData(res.data);
    }
  }

  useEffect(() => {
    getData();
  }, [type]);

  return (
    <Style.CatalogWrapper>
      <Header />
      <Container>
        <BreadCrumbs disableText={"Каталог"} />
        <Style.CatalogCardsWrapper>
          {data?.map((el) => (
            <ProductCard
              key={el.id}
              data={el}
              select={cartItems.find((item) => item.id == el.id)}
              selectLike={likeItems.find((item) => item.id == el.id)}
            />
          ))}
        </Style.CatalogCardsWrapper>
      </Container>
      <PopularProducts />
      <Info />
      <Contact />
      <Footer />
    </Style.CatalogWrapper>
  );
};

export default Catalog;
