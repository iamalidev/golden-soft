import React from "react";
import * as Style from "./style";

const CategoryPageCards = ({ img, text }) => {
  return (
    <Style.CategoryPageCard>
      <Style.CardImg>
        <img src={img} alt="" />
      </Style.CardImg>
      <Style.CardText>{text}</Style.CardText>
    </Style.CategoryPageCard>
  );
};

export default CategoryPageCards;
