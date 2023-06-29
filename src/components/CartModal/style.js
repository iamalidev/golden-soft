import { AllInclusiveSharp } from "@mui/icons-material";
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
  max-height: 715px;
  height: 100%;
  background-color: ${Colors.white};
  outline: none;
  padding-top: 16px;
  ${adaptiveValue("padding-inline", 40, 13)}

  &::after {
    content: "";
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #eaeaea;
  }
`;

const TitleAndClose = styled.div`
  width: 100%;
  ${Flex.spaceBetween}
`;

const CartModalTitle = styled.h3`
  font-family: ${Fonts.SFPRegular};
  ${adaptiveValue("font-size", 20, 15)};
  ${adaptiveValue("line-height", 34, 22)};
  color: ${Colors.black};
`;

export { CartModalWindow, CartModalTitle, TitleAndClose };
