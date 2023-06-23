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
  ${adaptiveValue("margin-top", 40, 20)}
  ${adaptiveValue("margin-bottom", 100, 40)}
  ${Flex.center};
  flex-direction: column;
`;

const CategoryPageTitle = styled.h2`
  font-family: ${Fonts.SFPSemibold};
  ${adaptiveValue("font-size", 44, 22)}
  ${adaptiveValue("line-height", 62, 30)}
  color: #000;
  text-align: center;
`;

const CategoryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  ${adaptiveValue("column-gap", 30, 20)};
  ${adaptiveValue("row-gap", 50, 18)};
  ${adaptiveValue("margin-block", 64, 20)};

  @media (max-width: 1320px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`;

const CategoryPageBtn = styled.button`
  width: 230px;
  padding: 12px 60px;
  font-family: ${Fonts.SFPRegular};
  font-size: 16px;
  line-height: 26px;
  color: ${Colors.white};
  border: 1px solid ${Colors.blue};
  background-color: ${Colors.blue};
  margin: 0 auto;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background: transparent;
    color: ${Colors.blue};
  }

  @media (max-width: 620px) {
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
