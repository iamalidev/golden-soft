import styled from "styled-components";
import { Colors, Flex, Fonts } from "../../utils";
import { adaptiveValue } from "../../utils/variable";

const StatisticsWrapper = styled.div`
  padding-block: 40px;
  padding-inline: 31px;
  ${Flex.center}
  ${adaptiveValue("gap", 82, 22)}
  background-color: ${Colors.lightBlue};
  flex-wrap: wrap;
  ${adaptiveValue("margin-bottom", 93, 40)}
`;

const StatisticsItems = styled.div`
  ${Flex.alignCenter}
  flex-direction: column;
  ${adaptiveValue("gap", 16, 8)}

  @media (max-width: 462px) {
    margin: 0 auto;
  }
`;

const StatisticsItemTitle = styled.h2`
  font-family: ${Fonts.SFPSemibold};
  ${adaptiveValue("font-size", 32, 21)}
  ${adaptiveValue("line-height", 38, 34)}
  color: ${Colors.black};
`;

const StatisticsItemText = styled.p`
  font-family: ${Fonts.SFPSemibold};
  ${adaptiveValue("font-size", 16, 11)}
  ${adaptiveValue("line-height", 26, 24)}
  color: ${Colors.gray};
`;

export {
  StatisticsWrapper,
  StatisticsItems,
  StatisticsItemTitle,
  StatisticsItemText,
};
