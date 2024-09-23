import React from "react";
import WhyFirstImg from "../../assets/img/svgIcons/whyFirstImg";
import WhySecondImg from "../../assets/img/svgIcons/whySecondImg";
import { Container } from "../Container/style";
import * as Style from "./style";

const Why = () => {
  return (
    <Container>
      <Style.WhyWrapper>
        <Style.WhyTitle>Почему Golden Service?</Style.WhyTitle>
        <Style.WhyItemsWrapper>
          <Style.WhyItem>
            <WhyFirstImg />
            <Style.WhyItemText>
              Возврат удвоенной стоимости каждого замка в случае брака.
            </Style.WhyItemText>
          </Style.WhyItem>
          <Style.WhyItem>
            <WhySecondImg />
            <Style.WhyItemText>
              Наносим ваш логотип компании на наш продукт
            </Style.WhyItemText>
          </Style.WhyItem>
          <Style.WhyItem>
            <WhyFirstImg />
            <Style.WhyItemText>
              Возврат удвоенной стоимости каждого замка в случае брака.
            </Style.WhyItemText>
          </Style.WhyItem>
        </Style.WhyItemsWrapper>
      </Style.WhyWrapper>
    </Container>
  );
};

export default Why;
