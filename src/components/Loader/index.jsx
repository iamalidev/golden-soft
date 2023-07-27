import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { Flex } from "../../utils";

export default function Loader() {
  return (
    <Content>
      <CircularProgress />
    </Content>
  );
}

const Content = styled(Box)`
  width: 100%;
  height: 100vh;
  ${Flex.center}
`;
