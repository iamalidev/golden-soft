import React from "react";
import * as Style from "./style";

import firstImg from "../../assets/img/category_img1.png";
import secondImg from "../../assets/img/category_img2.png";
import thirdImg from "../../assets/img/category_img3.png";
import fourthImg from "../../assets/img/category_img4.png";
import { Link } from "react-router-dom";
import { PriceBtn } from "../Banner/style";
import { Container } from "../Container/style";

const Category = () => {
  return (
    <Style.CategoryWrapper>
      <Container>
        <Style.CategoryTitle>Категории</Style.CategoryTitle>
        <Style.CategoryItemsWrapper>
          <Style.CategoryTopItems>
            <Style.CategoryItem>
              <Style.CategoryItemInfo>
                <Style.ItemInfoTitle>Для отелей</Style.ItemInfoTitle>
                <Link to="#">
                  <Style.ItemInfoBtn>Перейти</Style.ItemInfoBtn>
                </Link>
              </Style.CategoryItemInfo>
              <Style.CategoryItemImg>
                <img src={firstImg} alt="img" />
              </Style.CategoryItemImg>
            </Style.CategoryItem>
            <Style.CategoryItem>
              <Style.CategoryItemInfo>
                <Style.ItemInfoTitle>Для шкафчиков</Style.ItemInfoTitle>
                <Link to="#">
                  <Style.ItemInfoBtn>Перейти</Style.ItemInfoBtn>
                </Link>
              </Style.CategoryItemInfo>
              <Style.CategoryItemImg>
                <img src={secondImg} alt="img" />
              </Style.CategoryItemImg>
            </Style.CategoryItem>
          </Style.CategoryTopItems>
          <Style.CategoryBottomItems>
            <Style.CategoryItem>
              <Style.CategoryItemInfo>
                <Style.ItemInfoTitle>Для офисов</Style.ItemInfoTitle>
                <Link to="#">
                  <Style.ItemInfoBtn>Перейти</Style.ItemInfoBtn>
                </Link>
              </Style.CategoryItemInfo>
              <Style.CategoryItemImg>
                <img src={thirdImg} alt="" />
              </Style.CategoryItemImg>
            </Style.CategoryItem>
            <Style.CategoryItem>
              <Style.CategoryItemInfo>
                <Style.ItemInfoTitle>Замки для дома</Style.ItemInfoTitle>
                <Link to="#">
                  <Style.ItemInfoBtn>Перейти</Style.ItemInfoBtn>
                </Link>
              </Style.CategoryItemInfo>
              <Style.CategoryItemImg>
                <img src={fourthImg} alt="" />
              </Style.CategoryItemImg>
            </Style.CategoryItem>
          </Style.CategoryBottomItems>
          <Style.CategoryLink>Все категории</Style.CategoryLink>
        </Style.CategoryItemsWrapper>
      </Container>
    </Style.CategoryWrapper>
  );
};

export default Category;
