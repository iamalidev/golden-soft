import styled from "styled-components";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";
import { Colors, Flex, Fonts } from "../../utils";
import { adaptiveValue } from "../../utils/variable";
import { SwiperNavigation } from "../Banner/style";

const PopularProductsWrapper = styled.div`
  width: 100%;
  ${adaptiveValue("margin-bottom", 96, 36)};
  /* background: red; */
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

  @media (max-width: 768px) {
    text-align: center;
    margin: 0 auto;
  }
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

export {
  PopularProductsWrapper,
  PopularProductsTop,
  PopularProductsTitle,
  PopularSwiperNav,
  PopularNavArrow,
};
