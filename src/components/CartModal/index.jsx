import React, { useContext } from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import * as Style from "./style";
import CartModalTop from "./CartModalTop";
import { ProductRateBox, RateBoxText } from "../ProductCard/style";
import Rate from "../Rate";
import { Button, ButtonBase, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TrashIcon from "../../assets/img/svgIcons/trashIcon";
import MainContext from "../../Reducer/CartContext";

export default function CartModal({ cartModal, handleModal, data }) {
  const { img, title, newPrice, id } = data;
  const { removeFromCart } = useContext(MainContext);

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
                        <Style.CounterWrapper>
                          <Style.CounterBtn>-</Style.CounterBtn>
                          <Style.CounterBox>1</Style.CounterBox>
                          <Style.CounterBtn>+</Style.CounterBtn>
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
                      <Style.Price>33 000₽</Style.Price>
                    </Style.DelAndPrice>
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
