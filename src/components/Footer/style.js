import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors, Flex, Fonts } from "../../utils";
import { adaptiveValue } from "../../utils/variable";

const FooterWrapper = styled.div`
  width: 100%;
  padding: 55px 81px 25px 100px;
  background-color: #0d2436;

  @media (max-width: 768px) {
    padding: 30px 0 15px 0;
  }
`;

const FooterTop = styled.div`
  ${Flex.flexBetween}
  ${adaptiveValue("padding-bottom", 50, 30)}
  border-bottom: 1px solid #203546;

  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;

const FooterSocial = styled.div`
  ${Flex.justFlex}
  flex-direction: column;
  gap: 144px;

  @media (max-width: 1300px) {
    ${Flex.spaceBetween}
    flex-direction: row;
    gap: 0;
  }
`;

const FooterLogoWrapper = styled.div`
  ${adaptiveValue("width", 106, 70)}
  ${adaptiveValue("height", 88, 57)}
`;

const FooterSocialMedia = styled.div`
  ${Flex.justFlex}
  gap: 24px;
`;

const FooterLinksWrapper = styled.div`
  ${Flex.justFlex}
  gap: 97px;

  @media (max-width: 1300px) {
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 70px;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

const FooterLinks = styled.div`
  ${Flex.justFlex}
  flex-direction: column;
  gap: 24px;
`;

const FooterLinksTitle = styled.p`
  font-family: ${Fonts.SFPMedium};
  font-size: 18px;
  line-height: 28px;
  color: ${Colors.white};
`;

const FooterLinksContent = styled.div`
  ${Flex.justFlex}
  flex-direction: column;
  gap: 16px;
`;

const FooterLinksLink = styled(Link)`
  font-family: ${Fonts.SFPLight};
  font-size: 16px;
  line-height: 26px;
  color: ${Colors.white};
  transition: 0.2s;

  &:hover {
    color: ${Colors.blue};
  }
`;

const FooterBottom = styled.div`
  padding-top: 24px;
`;

const FooterBottomText = styled.p`
  font-family: ${Fonts.SFPRegular};
  ${adaptiveValue("font-size", 14, 11)}
  line-height: 17px;
  color: ${Colors.white};
  opacity: 0.6;
  text-align: center;
`;

const AccordionWrapper = styled.div`
  display: none;
  margin-top: 30px;

  @media (max-width: 576px) {
    display: block;
  }
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
  AccordionWrapper,
};
