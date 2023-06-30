import styled from "styled-components";
import { Colors, Flex, Fonts } from "../../../utils";
import { adaptiveValue } from "../../../utils/variable";

const CartModalTopWrapper = styled.div`
  width: 100%;
  padding-block: 16px;
  background-color: ${Colors.white};
  ${adaptiveValue("padding-inline", 40, 13)};
  ${Flex.spaceBetween};
  border-bottom: 1px solid #eaeaea;
`;

const CartModalTitle = styled.h3`
  font-family: ${Fonts.SFPRegular};
  ${adaptiveValue("font-size", 20, 15)};
  ${adaptiveValue("line-height", 34, 22)};
  color: ${Colors.black};
`;

export { CartModalTopWrapper, CartModalTitle };
