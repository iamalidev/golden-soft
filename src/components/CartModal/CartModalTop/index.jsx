import { IconButton } from "@mui/material";
import React from "react";
import ModalCloseIcon from "../../../assets/img/svgIcons/modalCloseIcon";
import * as Style from "./style";

const CartModalTop = ({ cartModal, handleModal }) => {
  return (
    <Style.CartModalTopWrapper>
      <Style.CartModalTitle>Корзина</Style.CartModalTitle>
      <IconButton open={cartModal} onClick={handleModal} onClose={handleModal}>
        <ModalCloseIcon />
      </IconButton>
    </Style.CartModalTopWrapper>
  );
};

export default CartModalTop;
