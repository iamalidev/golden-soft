import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors, Flex, Fonts } from "../../../utils";
import { adaptiveValue } from "../../../utils/variable";

const ItemsWrapperBox = styled.div`
  width: 100%;
  ${Flex.justFlex};
  flex-direction: column;
  gap: 20px;
`;

const ItemsContent = styled.div`
  width: 100%;
  ${Flex.flexBetween};
`;

const ItemsInfo = styled.div`
  ${Flex.alignCenter}
  gap: 12px;
`;

const ItemsImgWrapper = styled(Link)`
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
`;

const DelAndPrice = styled.div`
  ${Flex.justFlex};
  flex-direction: column;
  align-items: end;
  ${adaptiveValue("gap", 45, 10)};
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
  word-spacing: 10px;
`;

export {
  ItemsWrapperBox,
  ItemsContent,
  ItemsImgWrapper,
  ItemsInfo,
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
