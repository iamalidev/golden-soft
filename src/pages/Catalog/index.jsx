import React from "react";
import BreadCrumbs from "../../components/BreadCrumbs";
import Contact from "../../components/Contact";
import { Container } from "../../components/Container/style";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PopularProducts from "../../components/PopularProducts";
import { ProductCard } from "../../components/PopularProducts/style";
import * as Style from "./style";

const Catalog = () => {
  return (
    <Style.CatalogWrapper>
      <Header />
      <Container>
        <BreadCrumbs disableText={"Каталог"} />
      </Container>
      <PopularProducts />
      <Contact />
      <Footer />
    </Style.CatalogWrapper>
  );
};

export default Catalog;
