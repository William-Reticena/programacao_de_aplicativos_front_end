import styled from "styled-components";
import {
  Paper as MUIPaper,
  Modal as MUIModal,
} from "@mui/material";

export const Paper = styled(MUIPaper)`
  && {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 24px;
    padding: 8px;
    position: fixed;
    width: 12%;
  }
`;

export const Modal = styled(MUIModal)`
  && {
    align-items: center;
    display: flex;
    // justify-content: "center";
  }
`;
