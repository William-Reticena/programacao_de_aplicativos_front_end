import styled from "styled-components";
import {
  Grid,
} from "@mui/material";

export const GridContainer = styled(Grid).attrs(() => ({
  container: true
}))`
  margin-top: 80px;
`;

export const BoxTypo = styled.div`
  margin: 16px;
  text-align: center;
`;
