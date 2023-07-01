import styled from "styled-components";
import { Flex } from "../../../utils";
import { adaptiveValue } from "../../../utils/variable";

const CartModalBoxWrapper = styled.div`
  width: 100%;
  max-height: 500px;
  height: 100%;
  ${adaptiveValue("padding-block", 24, 13)};
  ${adaptiveValue("padding-inline", 40, 13)};
  overflow-y: auto;
`;

const CartWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow-y: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export { CartModalBoxWrapper, CartWrapper };
