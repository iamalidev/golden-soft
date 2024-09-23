import styled from "styled-components";
import { Colors, Flex, Fonts } from "../../utils";
import { adaptiveValue } from "../../utils/variable";

const AboutBanner = styled.div`
  width: 100%;
  ${Flex.spaceBetween};
  ${adaptiveValue("margin-bottom", 100, 35)}

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const BannerImg = styled.div`
  ${adaptiveValue("width", 665, 320)};
  ${adaptiveValue("height", 486, 224)};
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const BannerInfo = styled.div`
  ${Flex.justFlex};
  flex-direction: column;
  ${adaptiveValue("gap", 16, 10)}
`;

const Badge = styled.span`
  font-family: ${Fonts.SFPRegular};
  ${adaptiveValue("font-size", 18, 12)};
  ${adaptiveValue("line-height", 38, 20)};
  color: ${Colors.blue};
  text-decoration: underline;
`;

const TitlesWrapper = styled.div`
  ${Flex.justFlex};
  ${adaptiveValue("gap", 10, 6)}
`;

const BlackTitle = styled.h2`
  font-family: ${Fonts.SFPSemibold};
  ${adaptiveValue("font-size", 44, 20)};
  ${adaptiveValue("line-height", 62, 30)};
  color: ${Colors.black};
`;

const BlueTitle = styled.h2`
  font-family: ${Fonts.SFPSemibold};
  ${adaptiveValue("font-size", 44, 20)};
  ${adaptiveValue("line-height", 62, 30)};
  color: ${Colors.blue};
`;

const InfoText = styled.p`
  font-family: ${Fonts.SFPRegular};
  ${adaptiveValue("font-size", 14, 12)};
  ${adaptiveValue("line-height", 24, 20)};
  color: ${Colors.gray};
  ${adaptiveValue("width", 421, 320)}
`;

const AboutStat = styled.div`
  width: 100%;
  ${adaptiveValue("padding-block", 100, 30)};
  ${Flex.center}
  ${adaptiveValue("gap", 124, 30)}
  background-color: #0d2436;
  flex-wrap: wrap;
`;

const Items = styled.div`
  ${Flex.alignCenter}
  flex-direction: column;
  ${adaptiveValue("gap", 12, 6)}
`;

const ItemTitle = styled.h3`
  font-family: ${Fonts.SFPSemibold};
  ${adaptiveValue("font-size", 72, 46)}
  ${adaptiveValue("line-height", 72, 54)}
  color: ${Colors.white};
`;

const ItemText = styled.p`
  font-family: ${Fonts.SFPRegular};
  ${adaptiveValue("font-size", 18, 13)}
  ${adaptiveValue("line-height", 32, 20)}
  color: #CFD3D7;
`;

const AboutSection = styled.div`
  width: 100%;
  ${Flex.spaceBetween};
  ${adaptiveValue("margin-block", 100, 35)}

  @media (max-width: 850px) {
    flex-direction: column-reverse;
  }
`;

export {
  AboutBanner,
  BannerImg,
  BannerInfo,
  Badge,
  TitlesWrapper,
  BlackTitle,
  BlueTitle,
  InfoText,
  AboutStat,
  Items,
  ItemTitle,
  ItemText,
  AboutSection,
};
