import React, { useState } from "react";
import * as Style from "./style";
import MobileCatalogArrow from "../../../assets/img/svgIcons/mobileCatalogArrow";
import PhoneIcon from "../../../assets/img/svgIcons/phoneIcon";
import MobilePhoneIcon from "../../../assets/img/svgIcons/mobilePhoneIcon";

const MobileMenu = ({ open }) => {
  const [link, setLink] = useState(false);

  const click = () => {
    setLink(!link);
  };

  return (
    <Style.MobileMenuWrapper open={open}>
      <Style.MobileMenuLinks>
        <Style.MobileMenuLink to="/">Главная</Style.MobileMenuLink>
        <Style.MobileMenuLink to="/" onClick={() => click()}>
          Каталог <MobileCatalogArrow focus={link} />
        </Style.MobileMenuLink>
        <Style.MobileMenuLink to="/">Оптовая продажа</Style.MobileMenuLink>
        <Style.MobileMenuLink to="/">О нас</Style.MobileMenuLink>
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
