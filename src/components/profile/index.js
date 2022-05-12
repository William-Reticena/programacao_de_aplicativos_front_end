import React, { useState } from "react";
import { ProfileCard } from "../";
import { Modal, Paper } from "./style";
import {
  Avatar,
  Button,
  // Modal,
  // Paper,
  Typography,
} from "@mui/material";

export function Profile ({ userData }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // useEffect(() => {
    // getUserInfos();
  // });

  return (
    <Paper
      elevation={5}
      // sx={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "24px", padding: "8px", position: "fixed", width: "12%" }}
    >
      <Avatar />

      {/* <Typography>{userData.fullName}</Typography>
      <Typography>{userData.ra}</Typography>
      <Typography>{userData.course}</Typography> */}
      <Typography>nsjd</Typography>
      <Typography>sjdd</Typography>
      <Typography>sdkdjfk</Typography>
      <Button
        variant="contained"
        onClick={handleOpen}
      >
        Editar Perfil
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        sx={{ /*display: "flex" , alignItems: "center",*/ justifyContent: "center" }}
      >
        <ProfileCard
          userData={userData}
          onClose={handleClose}
        />
      </Modal>
    </Paper>
  );
};
