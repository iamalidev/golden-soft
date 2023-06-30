import styled from "styled-components";
import { Flex } from "../../../utils";
import { adaptiveValue } from "../../../utils/variable";

const CartModalBoxWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  ${adaptiveValue("padding-block", 24, 13)};
  ${adaptiveValue("padding-inline", 40, 13)};
`;

export { CartModalBoxWrapper };
