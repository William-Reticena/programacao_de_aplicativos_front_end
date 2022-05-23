import React from "react";
import { useFormik } from "formik";
import { Favorite, Share } from "@mui/icons-material";
import { TextField } from "./style";
import PerfilImage from "../../images/perfil-image.png"
import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  IconButton,
  Modal,
  Paper,
  // TextField,
  Typography
} from "@mui/material";

export function ModalShowProjects ({ register, onClose, open }) {
  const formik = useFormik({
    initialValues: {
      teacherName: "Vô",
      projectName: "MIPS",
      course: "BCC",
      collegePeriod: "6",
      amountHours: "2h",
      shift: "sim",
      schedules: "sim",
      numberVacant: "7",
      email: "iwadjawidjwai@gmail.com",
      description: "Vaga muito boa",
      requirements: "nenhum",
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Paper sx={{ /*display: "flex", flexDirection: "column",*/ width: "80%", padding: "16px" }}>
        <Typography variant="h1" sx={{ textAlign: "center", fontSize: "2em"}}>EDITAR VAGA</Typography>
        
            <form onSubmit={formik.handleSubmit}>
        <Grid container>
          <Grid item xs={2}>
            <Card elevation={0} sx={{ width: "100%", position: "relative", top: "80px"}}>
              <CardMedia component="img" image={PerfilImage} />
            </Card>
          </Grid>

          <Grid item xs={10}>
              <TextField
                name="projectName"
                value={formik.values.projectName}
                onChange={formik.handleChange}
                size="small"
                label="NOME DO PROJETO"
                sx={{ width: "calc(100% - 16px)", margin: "8px" }}
              />

              <Grid container item>
                <TextField
                  name="course"
                  value={formik.values.course}
                  onChange={formik.handleChange}
                  size="small"
                  label="CURSO"
                  sx={{ width: "55%", margin: "8px" }}
                />

                <TextField
                  name="collegePeriod"
                  value={formik.values.collegePeriod}
                  onChange={formik.handleChange}
                  size="small"
                  label="PERÍODO IDEAL"
                  sx={{ width: "calc(45% - 32px)", margin: "8px" }}
                />
              </Grid>

              <Grid container item>
                <TextField
                  name="amountHours"
                  value={formik.values.amountHours}
                  onChange={formik.handleChange}
                  size="small"
                  label="CARGA HORÁRIA SEMANAL"
                  sx={{ width: "45%", margin: "8px" }}
                />

                <TextField
                  name="shift"
                  value={formik.values.shift}
                  onChange={formik.handleChange}
                  size="small"
                  label="TURNO"
                  sx={{ width: "calc(55% - 32px)", margin: "8px" }}
                />
              </Grid>

              <Grid container item>
                <TextField
                  name="schedules"
                  value={formik.values.schedules}
                  onChange={formik.handleChange}
                  size="small"
                  label="HORÁRIOS"
                  sx={{ width: "45%", margin: "8px" }}
                />

                <TextField
                  name="numberVacant"
                  value={formik.values.numberVacant}
                  onChange={formik.handleChange}
                  size="small"
                  label="QUANTIDADE DE VAGAS"
                  sx={{ width: "calc(55% - 32px)", margin: "8px" }}
                />
              </Grid>

              <TextField
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                size="small"
                label="E-MAIL"
                sx={{ width: "calc(100% - 16px)", margin: "8px" }}
              />
              <TextField
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                size="small"
                multiline
                minRows={3}
                label="DESCRIÇÃO"
                sx={{ width: "calc(100% - 16px)", margin: "8px" }}
              />
              <TextField
                name="requirements"
                value={formik.values.requirements}
                onChange={formik.handleChange}
                size="small"
                multiline
                minRows={3}
                label="REQUISITOS"
                sx={{ width: "calc(100% - 16px)", margin: "8px" }}
              />
              <Box>
                <Box sx={{ width: "60%", display: "inline-flex", justifyContent: "center" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ justifySelf: "center", marginLeft:"40%" }}
                  >
                    INSCREVER-SE
                  </Button>
                </Box>

                <Box sx={{ width: "calc(40% - 8px)", display: "inline-flex", justifyContent: "right" }}>
                  <IconButton>
                    <Favorite /*color="primary"*/ />
                  </IconButton>

                  <IconButton>
                    <Share /*color="primary"*/ />
                  </IconButton>
                </Box>
              </Box>
          </Grid>
        </Grid>
            </form>
      </Paper>
    </Modal>
  );
};
