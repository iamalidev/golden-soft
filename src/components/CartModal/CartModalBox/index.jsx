import React from "react";
import * as Style from "./style";

const CartModalBox = ({ product }) => {
  const { title, img } = product;
  return (
    <Style.CartModalBoxWrapper>
      <Style.CartWrapper>
        <img src={img} alt="" />
      </Style.CartWrapper>
    </Style.CartModalBoxWrapper>
  );
};

export default CartModalBox;
