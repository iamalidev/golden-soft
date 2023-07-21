import React, { useState } from "react";
import * as Style from "./style";
import PhoneIcon from "../../../assets/img/svgIcons/phoneIcon";
import MobilePhoneIcon from "../../../assets/img/svgIcons/mobilePhoneIcon";
import MobileCatalogArrow from "../../../assets/img/svgIcons/mobileCatalogArrow";

const MobileMenu = ({ open }) => {
  const [link, setLink] = useState(false);

  const click = () => {
    setLink(!link);
  };

  return (
    <Style.MobileMenuWrapper open={open}>
      <Style.MobileMenuLinks>
        <Style.MobileMenuLink to="/">Главная</Style.MobileMenuLink>
        <Style.MobileMenuLink to="/category" onClick={() => click()}>
          Категории <MobileCatalogArrow focus={link} />
        </Style.MobileMenuLink>
        <Style.MobileMenuLink to="/contact">Контакты</Style.MobileMenuLink>
        <Style.MobileMenuLink to="/about-us">О нас</Style.MobileMenuLink>
      </Style.MobileMenuLinks>
      <Style.MobileMenuActions>
        <Style.MobileCallWrapper href="tel:+998886000860">
          <MobilePhoneIcon />
          +7 (966) 55 88 499
        </Style.MobileCallWrapper>
        <Style.MobileActionLink>Обратный звонок</Style.MobileActionLink>
      </Style.MobileMenuActions>
    </Style.MobileMenuWrapper>
  );
};

export default MobileMenu;
