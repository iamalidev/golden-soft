import styled from "styled-components";
import { Colors, Fonts } from "../../../utils";

const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 105px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  min-height: 706px;
  font-family: ${Fonts.SFPRegular};
  font-size: 16px;
  line-height: 26px;
  color: ${Colors.gray};
  padding: 50px 16px;
  background: white;
  transition: 0.4s;
  transform: ${({ open }) =>
    open == true ? "translateX(0)" : "translateX(-100%)"};
`;

export { MobileMenuWrapper };
