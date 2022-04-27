import styled from "styled-components";
import {
  AppBar as MUIAppBar,
  Card as MUICard,
  Typography as MUITypography
} from "@mui/material";

export const AppBar = styled(MUIAppBar)`
  && {
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    height: 80px;
  }
`;

export const Card = styled(MUICard)`
  && {
    background: inherit;
    width: 100px;
  }
`;

// export const Typography = styled(MUITypography)`
//   && {
//     font-size: 12px;
//   }
// `;
