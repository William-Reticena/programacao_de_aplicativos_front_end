import styled from "styled-components";
import { TextField as MUITextField } from "@mui/material";

export const TextField = styled(MUITextField)`
    "&:disabled" {
      color: yellow;
      background: pink;
    }
`;
