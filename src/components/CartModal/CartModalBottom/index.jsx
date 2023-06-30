import React from "react";
import { Link } from "react-router-dom";
import * as Style from "./style";

const CartModalBottom = () => {
  return (
    <Style.CartModalBottomWrapper>
      <Style.CartModalBottomBtn>Оформить заказ</Style.CartModalBottomBtn>
      <Style.TotalWrapper>
        <Style.TotalText>Итого:</Style.TotalText>
        <Style.TotalPrice>66 000₽</Style.TotalPrice>
      </Style.TotalWrapper>
    </Style.CartModalBottomWrapper>
  );
};

export default CartModalBottom;
