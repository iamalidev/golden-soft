import React, { useState } from "react";
import InCashFalse from "../../assets/img/svgIcons/inCashFalse";
import InCashTrue from "../../assets/img/svgIcons/inCashTrue";
import Rate from "../Rate";
import AddCartIcon from "@mui/icons-material/AddShoppingCart";
import * as Style from "./style";
import { IconButton } from "@mui/material";
import LikeBtn from "@mui/icons-material/FavoriteBorder";
import DeleteBtn from "@mui/icons-material/DeleteOutline";

const ProductCard = ({ inCash, img, title, newPrice, oldPrice }) => {
  const [isClick, setClick] = useState(false);
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
        <Style.PriceAndButtons>
          <Style.ProductPrice>
            <Style.ProductNewPrice>{newPrice}</Style.ProductNewPrice>
            <Style.ProductOldPrice>{oldPrice}</Style.ProductOldPrice>
          </Style.ProductPrice>
          <Style.BtnsWrapper>
            <IconButton color="error" aria-label="add to shopping cart">
              <LikeBtn />
            </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart">
              <AddCartIcon />
            </IconButton>
            {/* <IconButton color="gray" aria-label="add to shopping cart">
              <DeleteBtn />
            </IconButton> */}
          </Style.BtnsWrapper>
        </Style.PriceAndButtons>
      </Style.ProductCardInfo>
    </Style.ProductCardWrapper>
  );
};

export default ProductCard;
