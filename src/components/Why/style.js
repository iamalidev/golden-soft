import styled from "styled-components";
import { Colors, Flex, Fonts } from "../../utils";
import { adaptiveValue } from "../../utils/variable";

const WhyWrapper = styled.div`
  ${Flex.center}
  flex-direction: column;
  ${adaptiveValue("gap", 56, 24)}
  ${adaptiveValue("margin-bottom", 100, 40)}
`;

const WhyTitle = styled.h2`
  font-family: ${Fonts.SFPSemibold};
  ${adaptiveValue("font-size", 44, 22)}
  ${adaptiveValue("line-height", 62, 34)}
  color: ${Colors.black};
  text-align: center;
`;

const WhyItemsWrapper = styled.div`
  ${Flex.center}
  gap: 30px;

  @media (max-width: 1260px) {
    flex-wrap: wrap;
  }

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const WhyItem = styled.div`
  ${Flex.center}
  flex-direction: column;
  ${adaptiveValue("gap", 32, 16)}
  padding-block: 30px 24px;
  ${adaptiveValue("padding-inline", 24, 28)}
  border-left: 1px solid #C4CDD5;
  border-right: 1px solid #c4cdd5;

  @media (max-width: 850px) {
    border-left: none;
    border-right: none;
    border-top: 1px solid #c4cdd5;
    border-bottom: 1px solid #c4cdd5;
  }
`;

const WhyItemText = styled.p`
  max-width: 345px;
  width: 100%;
  text-align: center;
  font-family: ${Fonts.SFPRegular};
  ${adaptiveValue("font-size", 20, 16)}
  ${adaptiveValue("line-height", 32, 26)}
  color: ${Colors.gray};
`;

export { WhyWrapper, WhyTitle, WhyItemsWrapper, WhyItem, WhyItemText };
