import React from "react";
import { Container } from "../../Container/style";
import * as Style from "./style";

const HeaderTop = () => {
  return (
    <Style.HeaderTopWrapper>
      <Container>
        <Style.HeaderTopContent>
          <Style.HeaderTopText>
            Скидка 10% по промокоду “ZAMOK” на все заказы до 10.09
          </Style.HeaderTopText>
          <Style.HeaderTopLink href="tel:+998886000860">
            Обратный звонок
          </Style.HeaderTopLink>
        </Style.HeaderTopContent>
      </Container>
    </Style.HeaderTopWrapper>
  );
};

export default HeaderTop;
