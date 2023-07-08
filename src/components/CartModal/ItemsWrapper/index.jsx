import React, { useContext } from "react";
import { IconButton } from "@mui/material";
import TrashIcon from "../../../assets/img/svgIcons/trashIcon";
import { ProductRateBox, RateBoxText } from "../../ProductCard/style";
import Rate from "../../Rate";
import MainContext from "../../../context/CartContext";
import * as Style from "./style";

const ItemsWrapper = ({ product }) => {
  const { removeFromCart, addOne, removeOne } = useContext(MainContext);

  return (
    <Style.ItemsWrapperBox>
      {product.map((el) => (
        <Style.ItemsContent>
          <Style.ItemsInfo>
            <Style.ItemsImgWrapper>
              <img src={el.img} alt="" />
            </Style.ItemsImgWrapper>
            <Style.InfoBox>
              <Style.InfoBoxTop>
                <Style.InfoTitle>{el.title}</Style.InfoTitle>
                <Style.RateBoxWrapper>
                  <ProductRateBox>
                    <Rate />
                    <RateBoxText>(12) отзывов</RateBoxText>
                  </ProductRateBox>
                </Style.RateBoxWrapper>
              </Style.InfoBoxTop>
              <Style.CounterWrapper>
                <Style.CounterBtn onClick={() => removeOne(el.id)}>
                  -
                </Style.CounterBtn>
                <Style.CounterBox>{el.quantity}</Style.CounterBox>
                <Style.CounterBtn onClick={() => addOne(el.id)}>
                  +
                </Style.CounterBtn>
              </Style.CounterWrapper>
            </Style.InfoBox>
          </Style.ItemsInfo>
          <Style.DelAndPrice>
            <Style.DeleteBox>
              <IconButton onClick={() => removeFromCart(el.id)}>
                <TrashIcon />
              </IconButton>
              <Style.DeleteText onClick={() => removeFromCart(el.id)}>
                Удалить
              </Style.DeleteText>
            </Style.DeleteBox>
            <Style.Price>{el.newPrice * el.quantity}₽</Style.Price>
          </Style.DelAndPrice>
        </Style.ItemsContent>
      ))}
    </Style.ItemsWrapperBox>
  );
};

export default ItemsWrapper;
