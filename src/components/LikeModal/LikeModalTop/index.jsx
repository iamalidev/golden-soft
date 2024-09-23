import { IconButton } from "@mui/material";
import React from "react";
import ModalCloseIcon from "../../../assets/img/svgIcons/modalCloseIcon";
import {
  CartModalTitle,
  CartModalTopWrapper,
} from "../../CartModal/CartModalTop/style";

const LikeModalTop = ({ likeModal, handleLike }) => {
  return (
    <CartModalTopWrapper>
      <CartModalTitle>Избранное</CartModalTitle>
      <IconButton open={likeModal} onClick={handleLike} onClose={handleLike}>
        <ModalCloseIcon />
      </IconButton>
    </CartModalTopWrapper>
  );
};

export default LikeModalTop;
