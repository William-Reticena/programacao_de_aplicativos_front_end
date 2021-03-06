import React, { useState } from "react";
import { ProfileTeacherCard } from "../";
import { Modal, Paper } from "./style";
import { Avatar, Button, Typography } from "@mui/material";

export function ProfileTeacher({ userData }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Paper elevation={5}>
      <Avatar src={userData.img?.url} sx={{ width: 64, height: 64 }} />

      <Typography sx={{ textAlign: "center" }}>
        {userData.username_professor}
      </Typography>
      <Typography>{userData.id_professor}</Typography>
      <Typography>{userData.course_professor}</Typography>

      <Button variant="contained" onClick={handleOpen}>
        Editar Perfil
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        sx={{ justifyContent: "center" }}
      >
        <>
          <ProfileTeacherCard userData={userData} onClose={handleClose} />
        </>
      </Modal>
    </Paper>
  );
}
