import React, { useMemo } from "react";
import Modal from "@mui/material/Modal";
import { ProductRateBox, RateBoxText } from "../ProductCard/style";
import Rate from "../Rate";
import TrashIcon from "../../assets/img/svgIcons/trashIcon";
import MainContext from "../../context/CartContext";
import { useContext } from "react";
import { IconButton } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import LikeModalTop from "./LikeModalTop";
import { LikeContentWrapper } from "./style";
import AddCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import RemoveCartIcon from "@mui/icons-material/ShoppingCart";
import * as Style from "./style";
import {
  InfoBox,
  InfoBoxTop,
  InfoTitle,
  ItemsContent,
  ItemsImgWrapper,
  ItemsInfo,
  Price,
  RateBoxWrapper,
} from "../CartModal/ItemsWrapper/style";
import { CartModalWindow, EmptyText } from "../CartModal/style";

export default function LikeModal({ likeModal, handleLike, data }) {
  const { addToCart, removeFromCart, removeFromLike, cartItems, likeItems } =
    useContext(MainContext);

  const select = useMemo(() => {
    for (const iterator of likeItems) {
      for (const key of cartItems) {
        if (iterator.id == key.id) {
          return true;
        } else {
          return false;
        }
      }
    }
  }, [cartItems]);

  console.log(select);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={likeModal}
        onClose={handleLike}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <CartModalWindow>
          <LikeModalTop likeModal={likeModal} handleLike={handleLike} />
          {data?.length ? (
            <LikeContentWrapper>
              {data.map((el) => (
                <ItemsContent>
                  <ItemsInfo>
                    <ItemsImgWrapper>
                      <img src={el.img} alt="" />
                    </ItemsImgWrapper>
                    <InfoBox>
                      <InfoBoxTop>
                        <InfoTitle>{el.title}</InfoTitle>
                        <RateBoxWrapper>
                          <ProductRateBox>
                            <Rate />
                            <RateBoxText>(12) отзывов</RateBoxText>
                          </ProductRateBox>
                        </RateBoxWrapper>
                        <Style.PriceBox>
                          <Price>{el.newPrice}₽</Price>
                          <Style.OldPrice>{el.oldPrice}</Style.OldPrice>
                        </Style.PriceBox>
                      </InfoBoxTop>
                    </InfoBox>
                  </ItemsInfo>
                  <Style.Buttons>
                    <IconButton onClick={() => removeFromLike(el.id)}>
                      <TrashIcon />
                    </IconButton>
                    <IconButton
                      onClick={() =>
                        select ? removeFromCart(el.id) : addToCart(el)
                      }
                      color="primary"
                      aria-label="add to shopping cart"
                    >
                      {select ? <RemoveCartIcon /> : <AddCartIcon />}
                    </IconButton>
                  </Style.Buttons>
                </ItemsContent>
              ))}
            </LikeContentWrapper>
          ) : (
            <EmptyText>Пока пусто : (</EmptyText>
          )}
        </CartModalWindow>
      </Modal>
    </div>
  );
}
