import styled from "styled-components";
import { Colors, Flex, Fonts } from "../../../utils";
import { Link } from "react-router-dom";

const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 105px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -10;
  ${Flex.flexBetween}
  flex-direction: column;
  padding: 24px 16px;
  background-color: ${Colors.white};
  border-right: 1px solid #cacdd5;
  transition: 0.4s;
  transform: ${({ open }) =>
    open === true ? "translateX(0%)" : "translateX(-100%)"};
  display: none;

  @media (max-width: 800px) {
    ${Flex.justFlex}
  }

  @media (max-width: 768px) {
    top: 100px;
  }

  @media (max-width: 486px) {
    top: 116px;
  }
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
  font-size: 11px;
  line-height: 15px;
  color: ${Colors.gray};
`;
const MobileActionLink = styled.a`
  font-family: ${Fonts.SFPSemibold};
  font-size: 11px;
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
