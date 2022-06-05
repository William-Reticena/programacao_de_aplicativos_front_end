import React, { useState } from "react";
import PerfilImage from "../../images/perfil-image.png";
import { ProfileTeacherCard, ProfileCard } from "../";
import { Modal, Paper } from "./style";
import { Avatar, Button, Typography } from "@mui/material";

export function Profile({ userData }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // useEffect(() => {
  // getUserInfos();
  // });

  return (
    <Paper elevation={5}>
      <Avatar src={PerfilImage} />

      <Typography>{userData?.username_student}</Typography>
      <Typography>{userData?.ra_student}</Typography>
      <Typography>{userData?.course_student}</Typography>

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
          <ProfileCard userData={userData} onClose={handleClose} />
        </>
      </Modal>
    </Paper>
  );
}
