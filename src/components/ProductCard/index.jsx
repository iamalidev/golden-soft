import React from "react";
import InCashFalse from "../../assets/img/svgIcons/inCashFalse";
import InCashTrue from "../../assets/img/svgIcons/inCashTrue";
import Rate from "../Rate";
import * as Style from "./style";

const ProductCard = ({ inCash, img, title, newPrice, oldPrice }) => {
  return (
    <Style.ProductCardWrapper>
      <Style.ProductCardTop>
        <Style.InCashBox>
          {inCash ? <InCashTrue /> : <InCashFalse />}
        </Style.InCashBox>
        <Style.CardImgWrapper>
          <img src={img} alt="" />
        </Style.CardImgWrapper>
      </Style.ProductCardTop>
      <Style.ProductCardInfo>
        <Style.ProductRateBox>
          <Rate />
          <Style.RateBoxText>(12) отзывов</Style.RateBoxText>
        </Style.ProductRateBox>
        <Style.ProductCardTitle>{title}</Style.ProductCardTitle>
        <Style.ProductPrice>
          <Style.ProductNewPrice>{newPrice}</Style.ProductNewPrice>
          <Style.ProductOldPrice>{oldPrice}</Style.ProductOldPrice>
        </Style.ProductPrice>
      </Style.ProductCardInfo>
    </Style.ProductCardWrapper>
  );
};

export default ProductCard;
