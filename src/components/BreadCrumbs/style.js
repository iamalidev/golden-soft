import { Breadcrumbs, Typography } from "@mui/material";
import styled from "styled-components";
import { Colors } from "../../utils";
import { adaptiveValue } from "../../utils/variable";

const BreadCrumbsWrapper = styled(Breadcrumbs)`
  margin-top: 20px !important;
  margin-bottom: 40px !important;

  @media (max-width: 992px) {
    margin-bottom: 35px !important;
  }

  @media (max-width: 768px) {
    margin-bottom: 30px !important;
  }

  @media (max-width: 576px) {
    margin-bottom: 25px !important;
  }
`;

const OldLink = styled(Typography)`
  color: ${Colors.blue};
  font-size: 16px !important;

  @media (max-width: 768px) {
    font-size: 14px !important;
  }

  @media (max-width: 576px) {
    font-size: 12px !important;
  }
`;

const NewLink = styled(Typography)`
  color: gray;
  font-size: 16px !important;

  @media (max-width: 768px) {
    font-size: 14px !important;
  }

  @media (max-width: 576px) {
    font-size: 12px !important;
  }
`;

export { BreadCrumbsWrapper, OldLink, NewLink };
