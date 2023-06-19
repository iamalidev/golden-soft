import styled from "styled-components";
import { Colors, Flex, Fonts } from "../../utils";
import { adaptiveValue } from "../../utils/variable";

const FooterWrapper = styled.div`
  padding: 55px 81px 25px 100px;
  background-color: #0d2436;
  /* ${Flex.justFlex}
  flex-direction: column; */
`;

const FooterTop = styled.div`
  ${Flex.flexBetween}
  padding-bottom: 50px;
  border-bottom: 1px solid #203546;
`;

const FooterSocial = styled.div`
  ${Flex.justFlex}
  flex-direction: column;
  gap: 144px;
`;

const FooterLogoWrapper = styled.div`
  ${adaptiveValue("width", 106, 70)}
  ${adaptiveValue("height", 88, 57)}
  /* background: red; */
  /* overflow: hidden; */

  & > FooterLogo {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const FooterSocialMedia = styled.div`
  ${Flex.justFlex}
  gap: 24px;
`;

const FooterLinksWrapper = styled.div`
  ${Flex.justFlex}
  gap: 97px;
`;

const FooterLinks = styled.div`
  ${Flex.justFlex}
  flex-direction: column;
  gap: 24px;
`;

const FooterLinksTitle = styled.p`
  ${Fonts.SFPMedium}
  font-size: 18px;
  line-height: 28px;
  ${Colors.white}
`;

const FooterLinksContent = styled.div`
  ${Flex.justFlex}
  flex-direction: column;
  gap: 16px;
`;

const FooterLinksLink = styled.a`
  ${Fonts.SFPLight}
  font-size: 16px;
  line-height: 26px;
  ${Colors.white}
`;

const FooterBottom = styled.div`
  padding-top: 24px;
`;

const FooterBottomText = styled.p`
  ${Fonts.SFPRegular}
  font-size: 14px;
  line-height: 17px;
  ${Colors.white}
  opacity: 0.6;
  text-align: center;
`;

export {
  FooterBottomText,
  FooterWrapper,
  FooterTop,
  FooterSocial,
  FooterLogoWrapper,
  FooterSocialMedia,
  FooterLinksWrapper,
  FooterLinks,
  FooterLinksTitle,
  FooterLinksContent,
  FooterLinksLink,
  FooterBottom,
};
