import React, { useContext } from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import * as Style from "./style";
import CartModalTop from "./CartModalTop";
import MainContext from "../../context/CartContext";
import ItemsWrapper from "./ItemsWrapper";

export default function CartModal({ cartModal, handleModal, data }) {
  const { cartItems } = useContext(MainContext);

  const total = cartItems.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.newPrice * currentValue.quantity,
    0
  );

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
          {data.length ? (
            <Style.CartModalContent>
              <Style.CartContentWapper>
                <ItemsWrapper product={data} />
              </Style.CartContentWapper>
              <Style.CartModalBottomWrapper>
                <Style.CartModalBottomBtn>
                  Оформить заказ
                </Style.CartModalBottomBtn>
                <Style.TotalWrapper>
                  <Style.TotalText>Итого:</Style.TotalText>
                  <Style.TotalPrice>{total.toLocaleString()}₽</Style.TotalPrice>
                </Style.TotalWrapper>
              </Style.CartModalBottomWrapper>
            </Style.CartModalContent>
          ) : (
            <Style.EmptyText>Пока пусто : (</Style.EmptyText>
          )}
        </Style.CartModalWindow>
      </Modal>
    </div>
  );
}
