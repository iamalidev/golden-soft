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
      <Link to="/">
        <Style.OldLink>Главная</Style.OldLink>
      </Link>
      {additionalPageName ? (
        <Link to={additionalHrefText}>
          <Style.OldLink>{additionalPageName}</Style.OldLink>
        </Link>
      ) : null}
      <Style.NewLink>{disableText}</Style.NewLink>
    </Style.BreadCrumbsWrapper>
  );
};

export default BreadCrumbs;
