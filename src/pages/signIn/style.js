import styled from "styled-components";
import { Button as MUIButton } from "@mui/material";

export const Button1 = styled.button`
  color: red;
`;

export const Button = styled(MUIButton)`
&& {
  background: pink;
  font-size: 80px;
}
`;
