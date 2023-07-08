import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container } from "../../components/Container/style";
import { CategoryPageWrapper } from "./style";
import * as Style from "./style";
import { categoryListData } from "./data";
import CategoryPageCards from "../../components/CategoryPageCards";
import BreadCrumbs from "../../components/BreadCrumbs";

const CategoryPage = () => {
  return (
    <CategoryPageWrapper>
      <Header />
      <Container>
        <BreadCrumbs disableText={"Категории"} />
        <Style.CategoryContent>
          <Style.CategoryPageTitle>Категории</Style.CategoryPageTitle>
          <Style.CategoryList>
            {categoryListData.map((el) => (
              <CategoryPageCards
                key={el.id}
                img={el.img}
                text={el.text}
                type={el.type}
              />
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
