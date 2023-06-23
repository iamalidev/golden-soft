import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors, Fonts } from "../../utils";

const AccordionTitle = styled(Typography)`
  font-family: ${Fonts.SFPMedium};
  font-size: 20px;
  line-height: 30px;
  color: ${Colors.white};
`;

const AccordionText = styled(Link)`
  font-family: ${Fonts.SFPLight};
  font-size: 14px;
  line-height: 24px;
  color: ${Colors.lightGray};
`;

export { AccordionText, AccordionTitle };
