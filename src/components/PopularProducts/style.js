import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import { Colors, Flex, Fonts } from "../../utils";
import { adaptiveValue } from "../../utils/variable";
import { SwiperNavigation } from "../Banner/style";

const PopularProductsWrapper = styled.div`
  width: 100%;
  ${adaptiveValue("margin-bottom", 96, 36)};
`;

const PopularProductsTop = styled.div`
  ${Flex.spaceBetween};
  ${adaptiveValue("margin-bottom", 40, 24)}
`;

const PopularProductsTitle = styled.h2`
  font-family: ${Fonts.SFPSemibold};
  ${adaptiveValue("font-size", 44, 21)};
  ${adaptiveValue("line-height", 62, 34)};
  color: ${Colors.black};
`;

const PopularSwiperNav = styled(SwiperNavigation)`
  margin-inline: inherit;
  ${Flex.alignCenter};
  gap: 40px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const PopularNavArrow = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const ProductCard = styled(SwiperSlide)`
  width: 288px;
  position: relative;
  /* border: 1px solid #e7e7e7; */
  ${Flex.justFlex};
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

export {
  PopularProductsWrapper,
  PopularProductsTop,
  PopularProductsTitle,
  PopularSwiperNav,
  PopularNavArrow,
  ProductCard,
  ProductCardTop,
  InCashBox,
  ProductCardInfo,
  ProductCardTitle,
  ProductPrice,
  ProductNewPrice,
  ProductOldPrice,
};
