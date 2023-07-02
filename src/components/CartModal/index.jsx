import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import * as Style from "./style";
import CartModalTop from "./CartModalTop";
import { ProductRateBox, RateBoxText } from "../ProductCard/style";
import Rate from "../Rate";

export default function CartModal({ cartModal, handleModal, data }) {
  console.log(data);

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
                {data.map((el) => (
                  <Style.ItemsWrapper key={el.id}>
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
                      </Style.InfoBox>
                    </Style.ItemsInfo>
                  </Style.ItemsWrapper>
                ))}
              </Style.CartContentWapper>
              <Style.CartModalBottomWrapper>
                <Style.CartModalBottomBtn>
                  Оформить заказ
                </Style.CartModalBottomBtn>
                <Style.TotalWrapper>
                  <Style.TotalText>Итого:</Style.TotalText>
                  <Style.TotalPrice>66 000₽</Style.TotalPrice>
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
