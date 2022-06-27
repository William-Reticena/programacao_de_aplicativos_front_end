import React, { useState } from "react";
import PerfilImage from "../../images/perfil-image.png";
import { ProfileTeacherCard } from "../";
import { Modal, Paper } from "./style";
import { Avatar, Button, Typography } from "@mui/material";

export function ProfileTeacher({ userData }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Paper elevation={5}>
      <Avatar src={PerfilImage} sx={{ width: 64, height: 64 }} />

      <Typography sx={{ textAlign: "center" }}>
        {userData.username_professor}
      </Typography>
      <Typography>{userData.turno_professor}</Typography>
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
          <ProfileTeacherCard userData={userData} onClose={handleClose}>
            {/* {console.log("teacher")} */}
          </ProfileTeacherCard>
        </>
      </Modal>
    </Paper>
  );
}
