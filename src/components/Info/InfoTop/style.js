import styled from "styled-components";
import { Colors, Flex, Fonts } from "../../../utils";
import { adaptiveValue } from "../../../utils/variable";

const InfoTopWrapper = styled.div`
  width: 100%;
  ${Flex.spaceBetween}
`;

const Texts = styled.div`
  ${adaptiveValue("max-width", 605, 320)};
  width: 100%;
  ${Flex.justFlex};
  flex-direction: column;
  ${adaptiveValue("gap", 24, 10)}
`;

const ImgWrapper = styled.div`
  ${adaptiveValue("max-width", 605, 320)};
  width: 100%;
  ${adaptiveValue("max-height", 564, 300)};
  height: 100%;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const InfoTitle = styled.h3`
  font-family: ${Fonts.SFPSemibold};
  ${adaptiveValue("font-size", 32, 14)};
  ${adaptiveValue("line-height", 42, 22)};
  color: ${Colors.black};
`;

const InfoText = styled.p`
  font-family: ${Fonts.SFPRegular};
  ${adaptiveValue("font-size", 18, 12)};
  ${adaptiveValue("line-height", 32, 20)};
  color: ${Colors.gray};
`;

export { InfoTopWrapper, Texts, ImgWrapper, InfoTitle, InfoText };
