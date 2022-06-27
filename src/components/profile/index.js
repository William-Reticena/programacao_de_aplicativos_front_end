import React, { useState } from "react";
import PerfilImage from "../../images/perfil-image.png";
import { ProfileCard } from "../";
import { Modal, Paper } from "./style";
import { Avatar, Button, Typography } from "@mui/material";

export function Profile({ userData, typeUser }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(userData);

  return (
    <Paper elevation={5}>
      <Avatar src={PerfilImage} sx={{ width: 64, height: 64 }} />

      <Typography sx={{ textAlign: "center" }}>
        {userData.username_student}
      </Typography>
      <Typography>{userData.ra_student}</Typography>
      <Typography>{userData.course_student}</Typography>

      <Button variant="contained" onClick={handleOpen}>
        Editar Perfil
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        sx={{ justifyContent: "center" }}
      >
        <>
          <ProfileCard userData={userData} onClose={handleClose}>
            {/* {console.log("student")} */}
          </ProfileCard>
        </>
      </Modal>
    </Paper>
  );
}
