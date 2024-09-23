import styled from "styled-components";
import { adaptiveValue } from "../../../utils/variable";
import { Colors, Flex, Fonts } from "../../../utils";

const LikeContentWrapper = styled.div`
  width: 100%;
  ${adaptiveValue("padding-block", 24, 13)};
  ${adaptiveValue('padding-inline', 40, 13)};
  overflow-y: auto;
  ${Flex.justFlex}
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

const PriceBox = styled.div`
  ${Flex.alignCenter};
  gap: 10px;
  margin-top: 40px;
  ${adaptiveValue("margin-top", 40, 12)}
`;

const OldPrice = styled.span`
  font-family: ${Fonts.SFPLight};
  ${adaptiveValue("font-size", 14, 11)}
  ${adaptiveValue("line-height", 20, 16)}
  color: ${Colors.gray};
  text-decoration: line-through;
`;

const Buttons = styled.div`
  ${Flex.alignCenter};
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

export { LikeContentWrapper, PriceBox, OldPrice, Buttons };
