import React from "react";
import Modal from "@mui/material/Modal";
import {
  CartContentWapper,
  CartModalContent,
  CartModalWindow,
  DelAndPrice,
  DeleteBox,
  DeleteText,
  EmptyText,
  InfoBox,
  InfoBoxTop,
  InfoTitle,
  ItemsImgWrapper,
  ItemsInfo,
  ItemsWrapper,
  Price,
  RateBoxWrapper,
} from "../CartModal/style";
import { ProductRateBox, RateBoxText } from "../ProductCard/style";
import Rate from "../Rate";
import TrashIcon from "../../assets/img/svgIcons/trashIcon";
import MainContext from "../../context/CartContext";
import { useContext } from "react";
import { IconButton } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import LikeModalTop from "./LikeModalTop";
import { LikeContentWrapper, PriceBox } from "./style";
import AddCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import RemoveCartIcon from "@mui/icons-material/ShoppingCart";
import * as Style from "./style";

export default function LikeModal({ likeModal, handleLike, data, select }) {
  const { addToCart, removeFromCart, removeFromLike } = useContext(MainContext);

  const cartToggle = () => {
    return select ? removeFromCart(data.id) : addToCart(data);
  };

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
                <ItemsWrapper key={el.id}>
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
                  <DelAndPrice>
                    <DeleteBox>
                      <IconButton onClick={() => removeFromLike(el.id)}>
                        <TrashIcon />
                      </IconButton>
                      <IconButton
                        onClick={cartToggle}
                        color="primary"
                        aria-label="add to shopping cart"
                      >
                        {select ? <RemoveCartIcon /> : <AddCartIcon />}
                      </IconButton>
                    </DeleteBox>
                  </DelAndPrice>
                </ItemsWrapper>
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
