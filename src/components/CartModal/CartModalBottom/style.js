import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors, Flex, Fonts } from "../../../utils";
import { adaptiveValue } from "../../../utils/variable";

const CartModalBottomWrapper = styled.div`
  width: 100%;
  ${adaptiveValue("padding-block", 26, 13)};
  ${adaptiveValue("padding-inline", 40, 13)};
  background-color: ${Colors.white};
  ${Flex.spaceBetween};
  border-top: 1px solid #eaeaea;

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    align-items: end;
    gap: 15px;
  }
`;

const CartModalBottomBtn = styled(Link)`
  width: 249px;
  padding-block: 10px;
  background-color: ${Colors.blue};
  border: 1px solid ${Colors.blue};
  font-family: ${Fonts.SFPMedium};
  font-size: 16px;
  line-height: 26px;
  color: ${Colors.white};
  text-align: center;
  transition: 0.4s;

  &:hover {
    background-color: transparent;
    color: ${Colors.blue};
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const TotalWrapper = styled.div`
  ${Flex.justFlex};
  gap: 15px;
  align-items: end;

  @media (max-width: 700px) {
    width: 100%;
    ${Flex.flexBetween}
  }
`;

const TotalText = styled.p`
  font-family: ${Fonts.SFPRegular};
  ${adaptiveValue("font-size", 16, 12)};
  ${adaptiveValue("line-height", 26, 20)};
  color: ${Colors.black};
`;

const TotalPrice = styled.span`
  font-family: ${Fonts.SFPSemibold};
  ${adaptiveValue("font-size", 20, 14)};
  ${adaptiveValue("line-height", 30, 25)};
  color: ${Colors.black};
`;

export {
  CartModalBottomWrapper,
  CartModalBottomBtn,
  TotalWrapper,
  TotalText,
  TotalPrice,
};
