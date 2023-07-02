import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors, Flex, Fonts } from "../../utils";
import { adaptiveValue } from "../../utils/variable";

const CartModalWindow = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${adaptiveValue("max-width", 836, 320)};
  width: 100%;
  height: 80vh;
  background-color: ${Colors.white};
  ${Flex.justFlex};
  flex-direction: column;
  outline: none;
`;

const CartContentWapper = styled.div`
  width: 100%;
  ${adaptiveValue("padding-top", 24, 13)};
  ${adaptiveValue("padding-bottom", 130, 125)};
  ${adaptiveValue("padding-inline", 40, 13)};
  overflow-y: auto;
  ${Flex.justFlex}
  align-items: center;
  flex-direction: column;
  gap: 15px;
  position: relative;
  top: 0;
`;

const CartModalContent = styled.div`
  width: 100%;
  ${Flex.justFlex}
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
`;

const ItemsWrapper = styled.div`
  width: 100%;
  ${Flex.justFlex};
`;

const ItemsInfo = styled.div`
  ${Flex.justFlex}
  gap: 12px;
`;

const ItemsImgWrapper = styled.div`
  ${adaptiveValue("width", 136, 65)};
  ${adaptiveValue("height", 120, 63)};
  background-color: #f7f7f7;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const InfoBox = styled.div`
  ${Flex.just};
  flex-direction: column;
  gap: 35px;
`;

const InfoBoxTop = styled.div`
  ${Flex.just};
  flex-direction: column;
  gap: 6px;
`;

const InfoTitle = styled.p`
  ${adaptiveValue("width", 303, 140)}
  font-family: ${Fonts.SFPRegular};
  ${adaptiveValue("font-size", 16, 11)}
  ${adaptiveValue("line-height", 26, 18)}
  color: ${Colors.black};
`;

const RateBoxWrapper = styled.div`
  @media (max-width: 576px) {
    display: none;
  }
`;

const CartModalBottomWrapper = styled.div`
  width: 100%;
  ${adaptiveValue("padding-block", 26, 13)};
  ${adaptiveValue("padding-inline", 40, 13)};
  background-color: ${Colors.white};
  ${Flex.spaceBetween};
  border-top: 1px solid #eaeaea;
  position: fixed;
  bottom: 0;

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

const EmptyText = styled.p`
  font-family: ${Fonts.SFPLight};
  font-size: 16px;
  line-height: 120%;
  color: ${Colors.gray};
  margin: auto;
`;

export {
  CartModalWindow,
  CartContentWapper,
  CartModalContent,
  ItemsWrapper,
  ItemsInfo,
  ItemsImgWrapper,
  CartModalBottomWrapper,
  CartModalBottomBtn,
  TotalWrapper,
  TotalText,
  TotalPrice,
  EmptyText,
  InfoBox,
  InfoBoxTop,
  InfoTitle,
  RateBoxWrapper,
};
