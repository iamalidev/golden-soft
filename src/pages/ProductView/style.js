import styled from "styled-components";
import { Colors, Flex, Fonts } from "../../utils";
import { adaptiveValue } from "../../utils/variable";

const ProductViewWrapper = styled.div`
  width: 100%;
  ${Flex.justFlex};
  ${adaptiveValue("gap", 30, 15)};
  ${adaptiveValue("margin-bottom", 80, 35)}

  @media (max-width: 950px) {
    ${Flex.center};
    flex-direction: column;
  }
`;

const ImgWrapper = styled.div`
  ${adaptiveValue("width", 605, 300)};
  ${adaptiveValue("height", 513, 300)};
  overflow: hidden;
  background-color: #f7f7f7;
  ${Flex.center}

  & > img {
    width: 85%;
    height: 85%;
    object-fit: contain;
  }
`;

const ProductInfo = styled.div`
  width: 597px;

  @media (max-width: 950px) {
    width: 100%;
  }
`;

const ProductRateLine = styled.div`
  ${Flex.alignCenter};
  gap: 12px;
  width: 290px;
`;

const ProductCode = styled.span`
  font-family: ${Fonts.SFPRegular};
  ${adaptiveValue("font-size", 14, 12)};
  line-height: 21px;
  color: ${Colors.gray};
`;

const ProductName = styled.h2`
  font-family: ${Fonts.SFPSemibold};
  ${adaptiveValue("font-size", 24, 20)};
  line-height: 30px;
  color: ${Colors.black};
  margin-top: 15px;
`;

const SubTitle = styled.p`
  font-family: ${Fonts.SFPSemibold};
  font-size: 14px;
  line-height: 24px;
  color: ${Colors.black};
  ${adaptiveValue("margin-top", 12, 16)}
`;

const ChecboxesWrapper = styled.div`
  ${Flex.justFlex};
  gap: 12px;
  margin-top: 10px;

  @media (max-width: 370px) {
    flex-direction: column;
  }
`;

const AccordionWrapper = styled.div`
  width: 100%;
  ${adaptiveValue("margin-top", 21, 15)}
`;

const AccordionTitle = styled.h4`
  font-family: ${Fonts.SFPLight};
  font-size: 16px;
  line-height: 26px;
  color: ${Colors.black};
`;

const AccordionText = styled.p`
  font-family: ${Fonts.SFPRegular};
  font-size: 14px;
  line-height: 24px;
  color: ${Colors.gray};
`;

const PricesWrapper = styled.div`
  ${Flex.alignCenter};
  ${adaptiveValue("gap", 12, 6)};
  ${adaptiveValue("margin-top", 21, 15)}
`;

const NewPrice = styled.p`
  font-family: ${Fonts.SFPSemibold};
  ${adaptiveValue("font-size", 22, 16)};
  line-height: normal;
  color: ${Colors.black};
`;

const OldPrice = styled.p`
  font-family: ${Fonts.SFPLight};
  ${adaptiveValue("font-size", 20, 12)};
  line-height: normal;
  color: #a4a4a4;
  text-decoration: line-through;
`;

const InfoActions = styled.div`
  ${Flex.alignCenter};
  ${adaptiveValue("gap", 30, 14)};
  ${adaptiveValue("margin-top", 21, 9)};
`;

const BuyButton = styled.button`
  width: 288px;
  background-color: ${Colors.blue};
  border: 1px solid ${Colors.blue};
  cursor: pointer;
  ${adaptiveValue("padding-block", 15, 11)};
  font-family: ${Fonts.SFPMedium};
  ${adaptiveValue("font-size", 16, 14)};
  line-height: normal;
  color: ${Colors.white};
  text-align: center;
  transition: 0.4s;

  &:hover {
    background-color: ${Colors.white};
    color: ${Colors.blue};
  }
`;

const LikeBox = styled.div`
  ${Flex.alignCenter};
  gap: 3px;
`;

const LikeText = styled.span`
  font-family: ${Fonts.SFPRegular};
  font-size: 14px;
  line-height: 24px;
  color: ${Colors.gray};

  @media (max-width: 480px) {
    display: none;
  }
`;

export {
  ProductViewWrapper,
  ImgWrapper,
  ProductInfo,
  ProductRateLine,
  ProductCode,
  ProductName,
  SubTitle,
  ChecboxesWrapper,
  AccordionWrapper,
  AccordionTitle,
  AccordionText,
  PricesWrapper,
  NewPrice,
  OldPrice,
  InfoActions,
  BuyButton,
  LikeBox,
  LikeText,
};
