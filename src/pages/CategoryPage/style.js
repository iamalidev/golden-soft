import styled from "styled-components";
import { Breadcrumbs } from "@mui/material";
import { Fonts, Colors, Flex } from "../../utils";
import { adaptiveValue } from "../../utils/variable";
import { Link } from "react-router-dom";

const CategoryPageWrapper = styled.div`
  width: 100%;
`;

const BreadCrumbs = styled(Breadcrumbs)`
  margin-top: 20px !important;
`;

const CategoryContent = styled.div`
  width: 100%;
  ${adaptiveValue("margin-top", 40, 10)}
  ${adaptiveValue("margin-bottom", 100, 40)}
  ${Flex.center};
  flex-direction: column;
`;

const CategoryPageTitle = styled.h2`
  font-family: ${Fonts.SFPSemibold};
  font-size: 44px;
  line-height: 62px;
  color: #000;
  text-align: center;
`;

const CategoryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  ${adaptiveValue("column-gap", 50, 20)};
  ${adaptiveValue("row-gap", 30, 18)};
  ${adaptiveValue("margin-block", 64, 20)};
`;

const CategoryPageBtn = styled(Link)`
  width: 220px;
  padding: 12px 60px;
  font-family: ${Fonts.SFPRegular};
  font-size: 16px;
  line-height: 26px;
  color: ${Colors.white};
  text-align: center;
  ${adaptiveValue("padding-block", 12, 7)}
  border: 1px solid ${Colors.blue};
  background-color: ${Colors.blue};
  margin: 0 auto;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background: transparent;
    color: ${Colors.blue};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export {
  CategoryPageWrapper,
  BreadCrumbs,
  CategoryContent,
  CategoryPageTitle,
  CategoryList,
  CategoryPageBtn,
};
