import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BreadCrumbs from "../../components/BreadCrumbs";
import Contact from "../../components/Contact";
import { Container } from "../../components/Container/style";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Info from "../../components/Info";
import PopularProducts from "../../components/PopularProducts";
import * as Style from "./style";

const ProductView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const getData = async () => {
    const res = await axios.get(`${process.env.REACT_APP_MAIN_URL}/${id}`);
    if (res.status == 200) {
      setProduct(res.data);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <>
      <Header />
      <Container>
        <BreadCrumbs
          disableText={product?.title}
          additionalPageName={"Категории"}
          additionalHrefText={"/category"}
        />
        <Style.ProductViewWrapper>
          <Style.ImgWrapper>
            <img src={product.img} alt="" />
          </Style.ImgWrapper>
          <Style.ProductInfo></Style.ProductInfo>
        </Style.ProductViewWrapper>
      </Container>
      <PopularProducts />
      <Info />
      <Contact />
      <Footer />
    </>
  );
};

export default ProductView;
