import styled from "styled-components";
import { Colors, Flex, Fonts } from "../../utils";
import { adaptiveValue } from "../../utils/variable";

const BannerWrapper = styled.div`
  ${adaptiveValue("padding-top", 125, 40)}
  ${adaptiveValue("padding-bottom", 52, 10)}
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
  ${adaptiveValue("max-width", 570, 275)}
  width: 100%;
  ${adaptiveValue("heaight", 570, 300)}
  margin-bottom: 40px;

  & > img {
    width: 100%;
    object-fit: contain;
  }

  @media (max-width: 992px) {
    margin-bottom: 0;
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
    margin: 0 auto;
  }
`;

const InfoTitle = styled.h1`
  max-width: 493px;
  /* ${adaptiveValue("max-width", 493, 310)} */
  width: 100%;
  font-family: ${Fonts.SFPSemibold};
  ${adaptiveValue("font-size", 44, 22)}
  ${adaptiveValue("line-height", 62, 34)}
  color: ${Colors.black};

  @media (max-width: 992px) {
    text-align: center;
    margin: 0 auto;
  }

  @media (max-width: 400px) {
    width: 260px;
  }
`;

const InfoTexts = styled.div`
  ${Flex.justFlex}
  flex-direction: column;
  gap: 16px;
  margin-block: 20px 32px;

  @media (max-width: 992px) {
    display: none;
  }
`;

const InfoFirstText = styled.p`
  width: 287px;
  font-family: ${Fonts.SFPRegular};
  font-size: 14px;
  line-height: 24px;
  color: ${Colors.gray};
`;

const InfoSecondText = styled.p`
  width: 287px;
  font-family: ${Fonts.SFPRegular};
  font-size: 14px;
  line-height: 24px;
  color: ${Colors.gray};
`;

const PriceBox = styled.div`
  width: 220px;
  ${Flex.justFlex}
  flex-direction: column;
  margin-top: 20px;

  @media (max-width: 992px) {
    width: 100%;
    margin-top: 0;
  }
`;

const PriceTextsWrapper = styled.div`
  @media (max-width: 992px) {
    ${Flex.alignCenter}
    gap: 70px;
    margin: 20px auto;
  }
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

  @media (max-width: 992px) {
    /* margin-left: auto; */
    margin-block: 0;
    /* ${Flex.alignCenter} */
  }
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
  cursor: pointer;

  &:hover {
    background-color: ${Colors.white};
    color: ${Colors.blue};
  }

  @media (max-width: 992px) {
    width: 90%;
    margin: 0 auto;
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
  cursor: pointer;
`;

export {
  BannerWrapper,
  BannerImgWrapper,
  SwiperItems,
  BannerInfo,
  InfoTitle,
  InfoTexts,
  InfoFirstText,
  InfoSecondText,
  PriceBox,
  PriceText,
  Prices,
  NewPrice,
  OldPrice,
  PriceBtn,
  SwiperNavigation,
  SwiperNavBtn,
  PriceTextsWrapper,
};
