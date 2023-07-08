import React, { useMemo } from "react";
import { useContext } from "react";
import { ProductRateBox, RateBoxText } from "../../ProductCard/style";
import Rate from "../../Rate";
import TrashIcon from "../../../assets/img/svgIcons/trashIcon";
import MainContext from "../../../context/CartContext";
import { IconButton } from "@mui/material";
import AddCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import RemoveCartIcon from "@mui/icons-material/ShoppingCart";
import * as Style from "./style";
import {
  InfoBox,
  InfoBoxTop,
  InfoTitle,
  ItemsContent,
  ItemsImgWrapper,
  ItemsInfo,
  Price,
  RateBoxWrapper,
} from "../../CartModal/ItemsWrapper/style";

const LikeModalItems = ({ product, select }) => {
  const { id, img, title, newPrice, oldPrice } = product;
  const { addToCart, removeFromCart, removeFromLike, cartItems, likeItems } =
    useContext(MainContext);

  return (
    <Style.LikeContentWrapper>
      <ItemsContent>
        <ItemsInfo>
          <ItemsImgWrapper>
            <img src={img} alt="" />
          </ItemsImgWrapper>
          <InfoBox>
            <InfoBoxTop>
              <InfoTitle>{title}</InfoTitle>
              <RateBoxWrapper>
                <ProductRateBox>
                  <Rate />
                  <RateBoxText>(12) отзывов</RateBoxText>
                </ProductRateBox>
              </RateBoxWrapper>
              <Style.PriceBox>
                <Price>{newPrice}₽</Price>
                <Style.OldPrice>{oldPrice}</Style.OldPrice>
              </Style.PriceBox>
            </InfoBoxTop>
          </InfoBox>
        </ItemsInfo>
        <Style.Buttons>
          <IconButton onClick={() => removeFromLike(id)}>
            <TrashIcon />
          </IconButton>
          <IconButton
            onClick={() => (select ? removeFromCart(id) : addToCart(product))}
            color="primary"
            aria-label="add to shopping cart"
          >
            {select ? <RemoveCartIcon /> : <AddCartIcon />}
          </IconButton>
        </Style.Buttons>
      </ItemsContent>
    </Style.LikeContentWrapper>
  );
};

export default LikeModalItems;
