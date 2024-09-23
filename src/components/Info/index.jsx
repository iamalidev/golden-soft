import React from "react";
import { Container } from "../Container/style";
import InfoBottom from "./InfoBottom";
import InfoTop from "./InfoTop";
import * as Style from "./style";

const Info = () => {
  return (
    <Container>
      <Style.InfoWrapper>
        <InfoTop />
        <InfoBottom />
      </Style.InfoWrapper>
    </Container>
  );
};

export default Info;
