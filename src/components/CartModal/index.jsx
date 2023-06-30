import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import * as Style from "./style";
import CartModalTop from "./CartModalTop";
import CartModalBox from "./CartModalBox";
import CartModalBottom from "./CartModalBottom";

export default function CartModal({ cartModal, handleModal, data }) {
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
          <CartModalTop cartModal={cartModal} handleModal={handleModal} />
          <CartModalBox product={data} />
          <CartModalBottom />
        </Style.CartModalWindow>
      </Modal>
    </div>
  );
}
