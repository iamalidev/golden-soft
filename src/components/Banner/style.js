import styled from "styled-components";
import { Colors, Flex, Fonts } from "../../utils";
import { adaptiveValue } from "../../utils/variable";

const BannerWrapper = styled.div`
  ${adaptiveValue("padding-top", 125, 40)}
  ${adaptiveValue("padding-bottom", 52, 38)}
  background-color: ${Colors.lightGray};
`;

const SwiperItems = styled.div`
  ${Flex.justFlex}
  gap: 100px;
  ${adaptiveValue("gap", 100, 22)}

  @media (max-width: 992px) {
    width: 100%;
    flex-direction: column;
  }
`;

const BannerImgWrapper = styled.div`
  ${adaptiveValue("max-width", 590, 275)}
  ${adaptiveValue("heaight", 520, 300)}

  & > img {
    width: 100%;
    object-fit: contain;
  }

  @media (max-width: 992px) {
    margin: 0 auto;
  }
`;

const BannerInfo = styled.div`
  ${adaptiveValue("max-width", 493, 343)}
  width: 100%;
  text-align: left;
  padding-block: 50px;

  @media (max-width: 992px) {
    padding-block: 0;
  }
`;

const InfoTitle = styled.h1`
  ${adaptiveValue("max-width", 493, 246)}
  width: 100%;
  font-family: ${Fonts.SFPSemibold};
  ${adaptiveValue("font-size", 44, 22)}
  ${adaptiveValue("line-height", 62, 34)}
  color: ${Colors.black};
`;

const InfoText = styled.p`
  width: 287px;
  font-family: ${Fonts.SFPRegular};
  font-size: 14px;
  line-height: 24px;
  color: ${Colors.gray};
  margin-block: 20px 32px;

  @media (max-width: 992px) {
    display: none;
  }
`;

const PriceBox = styled.div`
  width: 220px;
  ${Flex.justFlex}
  flex-direction: column;

  /* @media (max-width: 992px) {
    width: 100%;
  } */
`;

const PriceText = styled.p`
  font-family: ${Fonts.SFPRegular};
  font-size: 12px;
  line-height: 22px;
  color: ${Colors.gray};
`;

const Prices = styled.div`
  ${Flex.alignCenter}
  gap: 12px;
  margin-block: 4px 16px;
`;

const NewPrice = styled.p`
  font-family: ${Fonts.SFPSemibold};
  ${adaptiveValue("font-size", 24, 18)}
  ${adaptiveValue("line-height", 29, 21)}
  color: ${Colors.black};
`;

const OldPrice = styled.p`
  font-family: ${Fonts.SFPLight};
  ${adaptiveValue("font-size", 22, 14)}
  ${adaptiveValue("line-height", 26, 17)}
  color: #a4a4a4;
  text-decoration: line-through;
`;

const PriceBtn = styled.button`
  width: 220px;
  padding-block: 12px;
  background-color: ${Colors.blue};
  border: 1px solid ${Colors.blue};
  font-family: ${Fonts.SFPMedium};
  font-size: 16px;
  ${adaptiveValue("line-height", 26, 19)}
  color: ${Colors.white};
  text-align: center;
  transition: 0.4s;

  &:hover {
    background-color: ${Colors.white};
    color: ${Colors.blue};
  }

  @media (max-width: 992px) {
    display: inline;
  }
`;

const SwiperNavigation = styled.div`
  width: 180px;
  margin-inline: auto;
  ${adaptiveValue("margin-top", 50, 32)}
  ${adaptiveValue("margin-bottom", 48, 40)}
    ${Flex.center}
    gap: 10px;

  @media (max-width: 576px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const SwiperNavBtn = styled.button`
  background-color: transparent;
  display: block;
  width: 24px;
  height: 24px;
`;

export {
  BannerWrapper,
  BannerImgWrapper,
  SwiperItems,
  BannerInfo,
  InfoTitle,
  InfoText,
  PriceBox,
  PriceText,
  Prices,
  NewPrice,
  OldPrice,
  PriceBtn,
  SwiperNavigation,
  SwiperNavBtn,
};
