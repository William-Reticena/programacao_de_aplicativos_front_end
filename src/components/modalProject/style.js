import styled from "styled-components";
import { TextField as MUITextField } from "@mui/material";

export const TextField = styled(MUITextField)`
  && {
    .Mui-disabled {
      -webkit-text-fill-color: rgba(0, 0, 0, 0.75);
    }
  }
`;
