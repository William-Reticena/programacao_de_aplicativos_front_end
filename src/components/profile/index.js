import React from "react";
import {
  Avatar,
  Button,
  Paper,
  Typography,
} from "@mui/material";

export function Profile () {
  return (
    <Paper
      elevation={5}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "24px", padding: "8px", position: "fixed", width: "12%" }}
    >
      <Avatar />

      <Typography>Nome e sobrenome</Typography>
      <Typography>RA</Typography>
      <Typography>Curso</Typography>
      <Button
        variant="contained"
      >
        Editar Perfil
      </Button>
    </Paper>
  );
};
