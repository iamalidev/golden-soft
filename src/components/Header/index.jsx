import React, { useState } from "react";
import * as Style from "./style";
import HeaderTop from "./HeaderTop";
import { Container } from "../Container/style";
import { Link } from "react-router-dom";
import HeaderLogo from "../../assets/img/svgIcons/headerLogo";
import PhoneIcon from "../../assets/img/svgIcons/phoneIcon";
import LikeIcon from "../../assets/img/svgIcons/likeIcon";
import CartIcon from "../../assets/img/svgIcons/cartIcon";
import CatalogArrow from "../../assets/img/svgIcons/catalocArrow";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggle = () => {
    setMobileMenu(!mobileMenu);
  };

  console.log(mobileMenu);

  return (
    <Style.HeaderWrapper>
      <HeaderTop />
      <Style.HeaderNav>
        <Container>
          <Style.HeaderNavContent>
            <Style.HeaderLinksWrapper>
              <Style.BurgerMenu onClick={() => toggle()}>
                <Style.BurgerTopItem open={mobileMenu} />
                <Style.BurgerBetweenItem open={mobileMenu} />
                <Style.BurgerBottomItem open={mobileMenu} />
              </Style.BurgerMenu>
              <Style.HeaderLogo to="/">
                <HeaderLogo />
              </Style.HeaderLogo>
              <Style.HeaderNavLinks>
                <Style.HeaderLink to="/">Главная</Style.HeaderLink>
                <Style.HeaderLink to="/catalog">
                  Каталог <CatalogArrow />
                </Style.HeaderLink>
                <Style.HeaderLink to="/wholesale">
                  Оптовая продажа
                </Style.HeaderLink>
                <Style.HeaderLink to="/about-us">О нас</Style.HeaderLink>
              </Style.HeaderNavLinks>
            </Style.HeaderLinksWrapper>
            <Style.UserActions>
              <Style.CallWrapper href="tel:+998886000860">
                <PhoneIcon />
                +7 (966) 55 88 499
              </Style.CallWrapper>
              <Style.ActionItem>
                <Link to="#">
                  <LikeIcon />
                </Link>
                <Link to="/cart">
                  <CartIcon />
                </Link>
              </Style.ActionItem>
            </Style.UserActions>
          </Style.HeaderNavContent>
        </Container>
      </Style.HeaderNav>
        <MobileMenu open={mobileMenu}></MobileMenu>
    </Style.HeaderWrapper>
  );
};

export default Header;
