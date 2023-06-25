import styled from "styled-components";
import { Colors, Flex, Fonts } from "../../utils";

const ProductCardWrapper = styled.div`
  width: 288px;
  position: relative;
  ${Flex.justFlex}
  flex-direction: column;
`;

const ProductCardTop = styled.div`
  padding-left: 4px !important;
  width: 100%;
  height: 320px;
  padding: 10px;
  ${Flex.center};
  flex-direction: column;
  gap: 7px;
  background-color: #f7f7f7;
`;

const CardImgWrapper = styled.div`
  width: 100%;

  & > img {
    width: 100%;
    object-fit: contain;
  }
`;

const InCashBox = styled.div`
  width: 100%;
  height: 30px;
  z-index: 1;
`;

const ProductCardInfo = styled.div`
  width: 100%;
  padding: 10px 12px;
  ${Flex.justFlex}
  background-color: #fff;
  flex-direction: column;
  gap: 10px;
  box-shadow: inset 0px -1px 0px #eaeaea, inset 1px 0px 0px #eaeaea,
    inset -1px 0px 0px #eaeaea;
`;

const ProductCardTitle = styled.p`
  font-family: ${Fonts.SFPRegular};
  font-size: 16px;
  line-height: 26px;
  color: ${Colors.gray};
  text-align: left;
`;

const ProductPrice = styled.div`
  ${Flex.alignCenter};
  gap: 12px;
`;

const ProductNewPrice = styled.span`
  font-family: ${Fonts.SFPSemibold};
  font-size: 20px;
  line-height: 24px;
  color: ${Colors.black};
`;

const ProductOldPrice = styled.span`
  font-family: ${Fonts.SFPLight};
  font-size: 18px;
  line-height: 21px;
  color: ${Colors.gray};
  text-decoration: line-through;
`;

const ProductRateBox = styled.div`
  width: 100%;
  ${Flex.center}
  gap: 8px;
`;

const RateBoxText = styled.span`
  width: 100%;
  font-family: ${Fonts.SFPRegular};
  font-size: 13px;
  line-height: 21px;
  color: ${Colors.gray};
  text-align: start;
`;

export {
  ProductCardWrapper,
  ProductCardTop,
  InCashBox,
  ProductCardInfo,
  ProductCardTitle,
  ProductPrice,
  ProductNewPrice,
  ProductOldPrice,
  ProductRateBox,
  RateBoxText,
  CardImgWrapper,
};
