import styled from "styled-components";
import { Colors, Flex, Fonts } from "../../../utils/index";
import { adaptiveValue } from "../../../utils/variable";

const HeaderTopWrapper = styled.div`
  width: 100%;
  padding-block: 9px;
  background-color: ${Colors.gray};
`;

const HeaderTopContent = styled.div`
  max-width: 888px;
  width: 100%;
  ${Flex.spaceBetween}
  margin-left: auto;

  @media (max-width: 768px) {
    ${Flex.center}
  }
`;

const HeaderTopText = styled.p`
  font-family: ${Fonts.SFPMedium};
  font-size: 16px;
  line-height: 26px;
  ${adaptiveValue("font-weight", 500, 400)}
  ${adaptiveValue("font-size", 16, 12)}
  ${adaptiveValue("line-height", 26, 18)}
  letter-spacing: 0.12em;
  color: ${Colors.white};

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const HeaderTopLink = styled.a`
  font-family: ${Fonts.SFPRegular};
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.12em;
  text-decoration-line: underline;
  color: ${Colors.white};

  @media (max-width: 768px) {
    display: none;
  }
`;

export { HeaderTopWrapper, HeaderTopContent, HeaderTopText, HeaderTopLink };
