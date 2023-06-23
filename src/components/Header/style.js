import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors, Flex, Fonts } from "../../utils";
import { adaptiveValue } from "../../utils/variable";

const HeaderWrapper = styled.header`
  width: 100%;
`;

const HeaderNav = styled.div`
  width: 100%;
  display: flex;
  ${adaptiveValue("padding-block", 20, 14)}
  border-bottom: 1px solid #c4cdd5;
  position: relative;
  background-color: ${Colors.white};
  z-index: 100;
`;

const HeaderLogo = styled(Link)`
  width: 50px;
  height: 42px;
  object-fit: contain;

  @media (max-width: 800px) {
    display: none;
  }
`;

const HeaderNavContent = styled.div`
  ${Flex.spaceBetween}
`;

const HeaderLinksWrapper = styled.div`
  ${Flex.justFlex}
  ${adaptiveValue("gap", 100, 1)}
`;

const HeaderNavLinks = styled.div`
  ${Flex.alignCenter}
  gap: 32px;

  @media (max-width: 800px) {
    display: none;
  }
`;

const HeaderLink = styled(Link)`
  font-family: ${Fonts.SFPLight};
  ${adaptiveValue("font-size", 20, 13)}
  line-height: 24px;
  color: ${Colors.black};
  padding-inline: 10px;
  ${Flex.center}
  gap: 8px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    /* left: 0; */
    width: 0;
    height: 81px;
    z-index: -2;
    /* background-color: ${Colors.lightBlue}; */
    border-bottom: 1px solid ${Colors.blue};
    transition: 0.2s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 80px;
    z-index: -1;
    background-color: ${Colors.lightBlue};
    display: none;
  }

  &.active::after {
    width: 100%;
  }

  &.active::before {
    display: block;
    border-bottom: 1px solid ${Colors.blue};
  }
`;

const UserActions = styled.div`
  ${Flex.spaceBetween}
  ${adaptiveValue("gap", 30, 1)}
`;

const CallWrapper = styled.a`
  ${Flex.alignCenter}
  gap: 9px;
  font-family: ${Fonts.SFPRegular};
  ${adaptiveValue("font-size", 18, 12)}
  line-height: 21px;
  color: ${Colors.gray};

  @media (max-width: 800px) {
    display: none;
  }
`;

const ActionItem = styled.div`
  ${Flex.alignCenter}
  ${adaptiveValue("gap", 24, 10)}
`;

const BurgerMenu = styled.div`
  width: 24px;
  height: 18px;
  flex-direction: column;
  display: none;

  @media (max-width: 800px) {
    ${Flex.flexBetween}
  }
`;

const BurgerTopItem = styled.span`
  width: 24px;
  height: 2px;
  border-radius: 10px;
  background-color: ${Colors.black};
  transition: 0.4s;
  transform: ${({ open }) =>
    open == true ? "translateY(8px) rotate(45deg)" : "translateY(0) rotate(0)"};
`;

const BurgerBottomItem = styled.span`
  width: 24px;
  height: 2px;
  border-radius: 10px;
  background-color: ${Colors.black};
  transition: 0.4s;
  transform: ${({ open }) =>
    open == true
      ? "translateY(-8px) rotate(-45deg)"
      : "translateY(0) rotate(0)"};
`;

const BurgerBetweenItem = styled.span`
  width: 24px;
  height: 2px;
  border-radius: 10px;
  background-color: ${Colors.black};
  transition: 0.4s;
  transform: scaleX(1);
  transform: ${({ open }) => (open == true ? "scaleX(0)" : "scaleX(1)")};
`;

export {
  HeaderWrapper,
  HeaderNav,
  HeaderNavContent,
  HeaderNavLinks,
  HeaderLink,
  UserActions,
  CallWrapper,
  ActionItem,
  HeaderLogo,
  HeaderLinksWrapper,
  BurgerMenu,
  BurgerTopItem,
  BurgerBetweenItem,
  BurgerBottomItem,
};
