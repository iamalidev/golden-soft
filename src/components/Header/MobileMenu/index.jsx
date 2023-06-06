import React from "react";
import * as Style from "./style";

const MobileMenu = ({ open }) => {
  return <Style.MobileMenuWrapper open={open}>Главная</Style.MobileMenuWrapper>;
};

export default MobileMenu;
