import { Box } from "@mui/system";
import styled from "styled-components";
import { Colors, Flex, Fonts } from "../../utils";
import { adaptiveValue } from "../../utils/variable";

const CartModalWindow = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${adaptiveValue("max-width", 836, 320)};
  width: 100%;
  height: 90vh;
  background-color: ${Colors.white};
  ${Flex.flexBetween};
  flex-direction: column;
  outline: none;
`;

export { CartModalWindow };
