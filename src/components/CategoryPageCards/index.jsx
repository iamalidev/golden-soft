import React from "react";
import { Link } from "react-router-dom";
import * as Style from "./style";

const CategoryPageCards = ({ img, text, type }) => {
  return (
    <Style.CategoryPageCard>
      <Link to={`/catalog/${type}`}>
        <Style.CardImg>
          <img src={img} alt="" />
        </Style.CardImg>
      </Link>
      <Style.CardText>{text}</Style.CardText>
    </Style.CategoryPageCard>
  );
};

export default CategoryPageCards;
