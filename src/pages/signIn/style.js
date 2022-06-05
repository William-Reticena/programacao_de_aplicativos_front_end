import styled from "styled-components";
import {
  Box as MUIBox,
  Button as MUIButton,
  Card as MUICard,
  Container as MUIContainer,
  FormControl as MUIFormControl,
  Paper as MUIPaper,
  RadioGroup as MUIRadioGroup,
  TextField as MUITextField,
} from "@mui/material";

export const Container = styled(MUIContainer)`
  && {
    align-items: center;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
  }
`;

export const Span = styled.span`
  font-size: 24px;
`;

export const Paper = styled(MUIPaper)`
  && {
    width: 450px;
  }
`;

export const Box = styled(MUIBox)`
  && {
    display: flex;
    justify-content: center;
    padding: 24px;
  }
`;

export const Card = styled(MUICard)`
  && {
    width: 300px;
  }
`;

export const FormControl = styled(MUIFormControl)`
  && {
    // padding: 16px;
    width: 350px;
  }
`;

export const RadioGroup = styled(MUIRadioGroup)`
  && {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    left: 40px;
    position: relative;
  }
`;

export const TextField = styled(MUITextField)`
  && {
    margin: 8px;
  }
`;

export const Button = styled(MUIButton)`
  && {
    margin: 8px;
    width: calc(100% - 15px);
  }
`;
