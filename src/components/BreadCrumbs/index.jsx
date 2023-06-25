import React from "react";
import { Link } from "react-router-dom";
import * as Style from "./style";

const BreadCrumbs = ({
  disableText,
  additionalPageName,
  additionalHrefText,
}) => {
  return (
    <Style.BreadCrumbsWrapper aria-label="breadcrumb">
      <Link underline="hover" color="inherit" to="/">
        <Style.OldLink>Главная</Style.OldLink>
      </Link>
      {additionalPageName ? (
        <Link underline="hover" color="inherit" to={additionalHrefText}>
          {additionalPageName}
        </Link>
      ) : null}
      <Style.NewLink>{disableText}</Style.NewLink>
    </Style.BreadCrumbsWrapper>
  );
};

export default BreadCrumbs;
