import React, { useContext, useState } from "react";
import InCashFalse from "../../assets/img/svgIcons/inCashFalse";
import InCashTrue from "../../assets/img/svgIcons/inCashTrue";
import Rate from "../Rate";
import * as Style from "./style";
import { IconButton } from "@mui/material";
import AddCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import RemoveCartIcon from "@mui/icons-material/ShoppingCart";
import AddLikeIcon from "@mui/icons-material/FavoriteBorder";
import RemoveLikeIcon from '@mui/icons-material/Favorite';
import MainContext from "../../Reducer/CartContext";

const ProductCard = ({ data, select }) => {
  const { inCash, img, title, newPrice, oldPrice, id } = data;

  const cartToggle = () => {
    return select ? removeFromCart(id) : addToCart(data);
  };

  const [isClick, setClick] = useState(false);

  const { addToCart, removeFromCart } = useContext(MainContext);
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
              <AddLikeIcon />
            </IconButton>
            <IconButton
              onClick={cartToggle}
              color="primary"
              aria-label="add to shopping cart"
            >
              {select ? <RemoveCartIcon /> : <AddCartIcon />}
            </IconButton>
          </Style.BtnsWrapper>
        </Style.PriceAndButtons>
      </Style.ProductCardInfo>
    </Style.ProductCardWrapper>
  );
};

export default ProductCard;
