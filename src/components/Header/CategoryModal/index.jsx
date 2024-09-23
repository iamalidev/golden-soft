import React, { useState } from "react";
import { Modal } from "@mui/material";
import { categoryModalData } from "./data";
import * as Style from "./style";
import img1 from "../../../assets/img/category_card_img1.png";

const CategoryModal = ({ categoryModal, handleCategory }) => {
  const [defined, setDefined] = useState(img1);

  const active = (el) => {
    setDefined(el);
  };

  return (
    <Modal open={categoryModal} onClose={handleCategory}>
      <Style.CategoryModalWrapper>
        <Style.TabsWrapper>
          {categoryModalData.map((el) => (
            <Style.Tab onClick={() => active(el.img)}>{el.text}</Style.Tab>
          ))}
          <Style.LinkBtn to="/category">Смотреть все</Style.LinkBtn>
        </Style.TabsWrapper>
        <Style.ImgWrapper to="/category">
          <img src={defined} alt="" />
        </Style.ImgWrapper>
      </Style.CategoryModalWrapper>
    </Modal>
  );
};

export default CategoryModal;
