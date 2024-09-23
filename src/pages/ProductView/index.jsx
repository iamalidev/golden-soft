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
import { RateBoxText } from "../../components/ProductCard/style";
import Rate from "../../components/Rate";
import {
  CheckboxItems,
  CheckboxText,
} from "../../components/Info/InfoTop/style";
import CheckboxIcon from "../../assets/img/svgIcons/checkbox";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
} from "@mui/material";
import AccordionArow from "../../assets/img/svgIcons/AccordionArrow";
import AddLikeIcon from "@mui/icons-material/FavoriteBorder";

const ProductView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_MAIN_URL}/${id}`);
      if (res.status === 200) {
        setProduct(res.data);
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    console.log("Requesting URL:", `${process.env.REACT_APP_MAIN_URL}/${id}`);
    getData();
  }, [id]);

  return (
    <>
      <Header />
      <Container>
        <BreadCrumbs
          additionalPageName={"Категории"}
          additionalHrefText={"/category"}
          disableText={product.cardTxt}
        />
        <Style.ProductViewWrapper>
          <Style.ImgWrapper>
            <img src={product.img} alt="" />
          </Style.ImgWrapper>
          <Style.ProductInfo>
            <Style.ProductRateLine>
              <Style.ProductCode>JA182765</Style.ProductCode>
              <Rate />
              <RateBoxText>(12) отзывов</RateBoxText>
            </Style.ProductRateLine>
            <Style.ProductName>{product.cardTxt}</Style.ProductName>
            <Style.SubTitle>Подходит для установки на:</Style.SubTitle>
            <Style.ChecboxesWrapper>
              <CheckboxItems>
                <CheckboxIcon />
                <CheckboxText>Деревянную дверь</CheckboxText>
              </CheckboxItems>
              <CheckboxItems>
                <CheckboxIcon />
                <CheckboxText>Межкомнатую дверь</CheckboxText>
              </CheckboxItems>
            </Style.ChecboxesWrapper>
            <Style.PricesWrapper>
              <Style.NewPrice>{product.nowPrice}</Style.NewPrice>
              <Style.OldPrice>{product.oldPrice}</Style.OldPrice>
            </Style.PricesWrapper>
            <Style.InfoActions>
              <Style.BuyButton>Купить</Style.BuyButton>
              <Style.LikeBox>
                <IconButton color="error" aria-label="add to shopping cart">
                  <AddLikeIcon />
                </IconButton>
                <Style.LikeText>В избранное</Style.LikeText>
              </Style.LikeBox>
            </Style.InfoActions>
            <Style.AccordionWrapper>
              <Accordion>
                <AccordionSummary
                  expandIcon={<AccordionArow />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{
                    backgroundColor: "#f6f7f9",
                    color: "white",
                  }}
                >
                  <Style.AccordionTitle>Оплата</Style.AccordionTitle>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: "#f6f7f9",
                    color: "gray",
                  }}
                >
                  <Style.AccordionText>
                    Оплата при получении товара, Картой онлайн, Google Pay,
                    Акционная оплата картой Visa, Безналичными для юридических
                    лиц, Безналичными для физических лиц, Apple Pay, PrivatPay,
                    Оплата картой в отделении
                  </Style.AccordionText>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<AccordionArow />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{
                    backgroundColor: "#f6f7f9",
                    color: "white",
                  }}
                >
                  <Style.AccordionTitle>Монтаж и доставка</Style.AccordionTitle>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: "#f6f7f9",
                    color: "gray",
                  }}
                >
                  <Style.AccordionText>
                    Оплата при получении товара, Картой онлайн, Google Pay,
                    Акционная оплата картой Visa, Безналичными для юридических
                    лиц, Безналичными для физических лиц, Apple Pay, PrivatPay,
                    Оплата картой в отделении
                  </Style.AccordionText>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<AccordionArow />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{
                    backgroundColor: "#f6f7f9",
                    color: "white",
                  }}
                >
                  <Style.AccordionTitle>Гарантии и выгода</Style.AccordionTitle>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: "#f6f7f9",
                    color: "gray",
                  }}
                >
                  <Style.AccordionText>
                    Оплата при получении товара, Картой онлайн, Google Pay,
                    Акционная оплата картой Visa, Безналичными для юридических
                    лиц, Безналичными для физических лиц, Apple Pay, PrivatPay,
                    Оплата картой в отделении
                  </Style.AccordionText>
                </AccordionDetails>
              </Accordion>
            </Style.AccordionWrapper>
          </Style.ProductInfo>
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
