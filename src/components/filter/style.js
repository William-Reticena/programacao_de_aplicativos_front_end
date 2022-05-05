import styled from "styled-components";
import {
  FormControl as MUIFormControl,
  FormControlLabel as MUIFormControlLabel,
  Paper as MUIPaper,
  Typography as MUITypography,
} from "@mui/material";

export const Paper = styled(MUIPaper)`
  && {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 24px;
    padding: 8px;
    position: fixed;
    width: 12.5%;
  }
`;

export const Typography = styled(MUITypography)`
  && {
    background: #E3F2FD;
    border-radius: 4px;
    color: #305FAC;
    line-height: 40px;
    height: 40px;
    margin-bottom: 16px;
    text-align: center;
    width: 100%;
  }
`;

export const FormControl = styled(MUIFormControl)`
  margin-left: 8px;
`;

export const FormControlLabel = styled(MUIFormControlLabel)`
  && {
    .MuiFormControlLabel-label {
      font-size: 0.9em;
    }
  }
`;
