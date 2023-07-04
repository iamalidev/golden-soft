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
  ${Flex.flexBetween};
`;

const ItemsInfo = styled.div`
  ${Flex.alignCenter}
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
  ${Flex.justFlex};
  flex-direction: column;
  ${adaptiveValue("gap", 35, 10)}
`;

const InfoBoxTop = styled.div`
  ${Flex.just};
  flex-direction: column;
`;

const InfoTitle = styled.p`
  font-family: ${Fonts.SFPRegular};
  ${adaptiveValue("font-size", 16, 11)}
  ${adaptiveValue("line-height", 26, 15)}
  color: ${Colors.black};

  @media (max-width: 768px) {
    ${adaptiveValue("width", 300, 140)}
  }
`;

const RateBoxWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const CounterWrapper = styled.div`
  ${Flex.alignCenter}
  justify-content: start;
  gap: 8px;
`;

const CounterBox = styled.span`
  font-family: ${Fonts.SFPRegular};
  ${adaptiveValue("font-size", 14, 11)}
  ${adaptiveValue("line-height", 24, 20)}
  color: ${Colors.black};
  ${adaptiveValue("padding-block", 5, 1)}
  ${adaptiveValue("padding-inline", 22, 17)}
  border: 1px solid #eaeaea;
`;

const CounterBtn = styled.button`
  font-family: ${Fonts.SFPRegular};
  ${adaptiveValue("font-size", 25, 11)}
  ${adaptiveValue("line-height", 24, 20)}
  color: ${Colors.black};
  background: transparent;
  cursor: pointer;

  &:disabled {
    color: #c4cdd5;
  }
`;

const DelAndPrice = styled.div`
  ${Flex.justFlex};
  flex-direction: column;
  align-items: end;
  ${adaptiveValue("gap", 68, 15)};
`;

const DeleteBox = styled.div`
  ${Flex.alignCenter};
  ${adaptiveValue("gap", 12, 6)};
`;

const DeleteText = styled.span`
  font-family: ${Fonts.SFPMedium};
  ${adaptiveValue("font-size", 16, 11)}
  ${adaptiveValue("line-height", 26, 11)}
  color: ${Colors.blue};
  cursor: pointer;

  @media (max-width: 800px) {
    display: none;
  }
`;

const Price = styled.span`
  font-family: ${Fonts.SFPRegular};
  ${adaptiveValue("font-size", 16, 12)}
  ${adaptiveValue("line-height", 26, 20)}
  color: ${Colors.black};
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
  /* margin-top: 30px; */

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
  CounterWrapper,
  CounterBox,
  CounterBtn,
  DelAndPrice,
  DeleteBox,
  DeleteText,
  Price,
};
