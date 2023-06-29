import React, { useState, useEffect } from "react";
import * as Style from "./style";
import HeaderTop from "./HeaderTop";
import { Container } from "../Container/style";
import { Link, useRoutes } from "react-router-dom";
import HeaderLogo from "../../assets/img/svgIcons/headerLogo";
import PhoneIcon from "../../assets/img/svgIcons/phoneIcon";
import LikeIcon from "../../assets/img/svgIcons/likeIcon";
import CartIcon from "../../assets/img/svgIcons/cartIcon";
import CatalogArrow from "../../assets/img/svgIcons/catalocArrow";
import MobileMenu from "./MobileMenu";
import { IconButton } from "@mui/material";
import CartModal from "../CartModal";

const Header = () => {
  const pathname = window.location.pathname;
  const [mobileMenu, setMobileMenu] = useState(false);
  const [cartModal, setCartModal] = useState(false);

  console.log(cartModal);

  const toggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleModal = () => {
    setCartModal(!cartModal);
  };

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <>
      <HeaderTop />
      <Style.HeaderWrapper>
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
                  <Style.HeaderLink
                    to="/"
                    className={`${pathname == "/" ? "active" : ""}`}
                  >
                    Главная
                  </Style.HeaderLink>
                  <Style.HeaderLink
                    to="/catalog"
                    className={`${pathname == "/catalog" ? "active" : ""}`}
                  >
                    Каталог <CatalogArrow />
                  </Style.HeaderLink>
                  <Style.HeaderLink
                    to="/wholesale"
                    className={`${pathname == "/wholesale" ? "active" : ""}`}
                  >
                    Оптовая продажа
                  </Style.HeaderLink>
                  <Style.HeaderLink
                    to="/about-us"
                    className={`${pathname == "/about-us" ? "active" : ""}`}
                  >
                    О нас
                  </Style.HeaderLink>
                </Style.HeaderNavLinks>
              </Style.HeaderLinksWrapper>
              <Style.UserActions>
                <Style.CallWrapper href="tel:+998886000860">
                  <PhoneIcon />
                  +7 (966) 55 88 499
                </Style.CallWrapper>
                <Style.ActionItem>
                  <LikeIcon />
                  <CartIcon onClick={handleModal} />
                </Style.ActionItem>
              </Style.UserActions>
            </Style.HeaderNavContent>
          </Container>
          <CartModal cartModal={cartModal} handleModal={handleModal} />
          <MobileMenu open={mobileMenu}></MobileMenu>
        </Style.HeaderNav>
      </Style.HeaderWrapper>
    </>
  );
};

export default Header;
