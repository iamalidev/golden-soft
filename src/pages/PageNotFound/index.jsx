import React from "react";
import { Container } from "../../components/Container/style";
import img from "../../assets/img/404.png";
import * as Style from "./style";
import { CategoryPageBtn } from "../CategoryPage/style";

const PageNotFound = () => {
  return (
    <Style.PNF>
      <Container>
        <Style.Wrapper>
          <Style.ImgWrapper>
            <img src={img} alt="" />
          </Style.ImgWrapper>
          <Style.LinkBtn to="/">Перейти на главную</Style.LinkBtn>
        </Style.Wrapper>
      </Container>
    </Style.PNF>
  );
};

export default PageNotFound;
