import React, { useState } from "react";
import { ProfileCard } from "../";
import {
  Avatar,
  Button,
  Modal,
  Paper,
  Typography,
} from "@mui/material";

export function Profile () {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        onClick={handleOpen}
      >
        Editar Perfil
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <ProfileCard onClose={handleClose} />
      </Modal>
    </Paper>
  );
};
