import React, { useContext, useMemo } from "react";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import LikeModalTop from "./LikeModalTop";
import * as Style from "./style";
import { CartModalWindow, EmptyText } from "../CartModal/style";
import LikeModalItems from "./LikeModalItems";
import MainContext from "../../context/CartContext";

export default function LikeModal({ likeModal, handleLike, data }) {
  const { cartItems } = useContext(MainContext);
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
            <Style.ItemsWrapper>
              {data.map((el) => (
                <LikeModalItems
                  key={el.id}
                  product={el}
                  select={cartItems.find((item) => item.id == el.id)}
                />
              ))}
            </Style.ItemsWrapper>
          ) : (
            <EmptyText>Пока пусто : (</EmptyText>
          )}
        </CartModalWindow>
      </Modal>
    </div>
  );
}
