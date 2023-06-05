import React from "react";
import { Container } from "../../Container/style";
import {
  HeaderTopWrapper,
  HeaderTopContent,
  HeaderTopText,
  HeaderTopLink,
} from "./style";

const HeaderTop = () => {
  return (
    <HeaderTopWrapper>
      <Container>
        <HeaderTopContent>
          <HeaderTopText>
            Скидка 10% по промокоду “ZAMOK” на все заказы до 10.09
          </HeaderTopText>
          <HeaderTopLink href="#">Обратный звонок</HeaderTopLink>
        </HeaderTopContent>
      </Container>
    </HeaderTopWrapper>
  );
};

export default HeaderTop;
