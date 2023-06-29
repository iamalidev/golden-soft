import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import * as Style from "./style";
import ModalCloseIcon from "../../assets/img/svgIcons/modalCloseIcon";
import { IconButton } from "@mui/material";

export default function CartModal({ cartModal, handleModal }) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={cartModal}
        onClose={handleModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Style.CartModalWindow>
          <Style.TitleAndClose>
            <Style.CartModalTitle>Корзина</Style.CartModalTitle>
            <IconButton onClick={handleModal}>
              <ModalCloseIcon />
            </IconButton>
          </Style.TitleAndClose>
        </Style.CartModalWindow>
      </Modal>
    </div>
  );
}
