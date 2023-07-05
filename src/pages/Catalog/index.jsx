import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import BreadCrumbs from "../../components/BreadCrumbs";
import Contact from "../../components/Contact";
import { Container } from "../../components/Container/style";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PopularProducts from "../../components/PopularProducts";
import { PopularProductsTitle } from "../../components/PopularProducts/style";
import ProductCard from "../../components/ProductCard";
import * as Style from "./style";
import MainContext from "../../context/CartContext";

const Catalog = () => {
  const [data, setData] = useState([]);
  const { cartItems } = useContext(MainContext);
  const { likeItems } = useContext(MainContext);

  async function getData() {
    const res = await axios.get(`${process.env.REACT_APP_MAIN_URL}`);

    if ((res.status = 200)) {
      setData(res.data);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Style.CatalogWrapper>
      <Header />
      <Container>
        <BreadCrumbs disableText={"Каталог"} />
        <PopularProductsTitle>Накладные электронные замки</PopularProductsTitle>
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
      <Contact />
      <Footer />
    </Style.CatalogWrapper>
  );
};

export default Catalog;
