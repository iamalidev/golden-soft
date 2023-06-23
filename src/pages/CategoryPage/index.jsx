import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container } from "../../components/Container/style";
import { CategoryPageWrapper } from "./style";
import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import * as Style from "./style";
import { categoryListData } from "./data";
import CategoryPageCards from "../../components/CategoryPageCards";
import { CategoryLink } from "../../components/Category/style";

const CategoryPage = () => {
  return (
    <CategoryPageWrapper>
      <Header />
      <Container>
        <Style.BreadCrumbs aria-label="breadcrumb">
          <Link underline="hover" color="black" to="/">
            Главная
          </Link>
          <Typography color="gray">Каталог</Typography>
        </Style.BreadCrumbs>
        <Style.CategoryContent>
          <Style.CategoryPageTitle>Категории</Style.CategoryPageTitle>
          <Style.CategoryList>
            {categoryListData.map((el) => (
              <CategoryPageCards key={el.id} img={el.img} text={el.text} />
            ))}
          </Style.CategoryList>
          <Style.CategoryPageBtn>Смотреть все</Style.CategoryPageBtn>
        </Style.CategoryContent>
      </Container>
      <Footer />
    </CategoryPageWrapper>
  );
};

export default CategoryPage;
