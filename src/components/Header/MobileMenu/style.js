import styled from "styled-components";
import { Colors, Flex, Fonts } from "../../../utils";
import { Link } from "react-router-dom";

const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 116px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  ${Flex.flexBetween}
  flex-direction: column;
  min-height: 706px;
  padding: 40px 16px 130px 16px;
  background-color: ${Colors.white};
  border-right: 1px solid #cacdd5;
  transition: 0.4s;
  transform: ${({ open }) =>
    open == true ? "translateX(0)" : "translateX(-100%)"};

  /* &::after {
    position: absolute;
    top: 100px;
    width: 100%;
    height: 10px;
    background-color: ${Colors.blue};
  } */
`;

const MobileMenuLinks = styled.div`
  width: 100%;
  ${Flex.justFlex}
  flex-direction: column;
  gap: 16px;
`;

const MobileMenuLink = styled(Link)`
  font-family: ${Fonts.SFPRegular};
  font-size: 16px;
  line-height: 26px;
  color: ${Colors.gray};
  ${Flex.spaceBetween}
  width: 100%;
  padding: 0 9px 15px 0;
  border-bottom: 1px solid #eaeaea;

  &:focus {
    color: ${Colors.blue};
  }
`;

const MobileMenuActions = styled.div`
  width: 100%;
  ${Flex.spaceBetween}
`;

const MobileCallWrapper = styled.a`
  ${Flex.alignCenter}
  gap: 8px;
  font-family: ${Fonts.SFPRegular};
  font-size: 12px;
  line-height: 15px;
  color: ${Colors.gray};
`;

const MobileActionLink = styled.a`
  font-family: ${Fonts.SFPSemibold};
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.12em;
  text-decoration-line: underline;
  color: ${Colors.blue};
`;

export {
  MobileMenuWrapper,
  MobileMenuLinks,
  MobileMenuLink,
  MobileMenuActions,
  MobileCallWrapper,
  MobileActionLink,
};
