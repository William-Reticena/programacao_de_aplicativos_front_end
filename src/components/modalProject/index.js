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

export function ModalProject ({ data, onClose, open }) {
  const formik = useFormik({
    initialValues: {
      teacherName: data.teacherName,
      projectName: data.projectName,
      course: data.course,
      collegePeriod: data.collegePeriod,
      amountHours: data.amountHours,
      shift: data.shift,
      schedules: data.schedules,
      numberVacant: data.numberVacant,
      email: data.email,
      description: data.description,
      requirements: data.requirements,
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
        <Typography variant="h1" sx={{ textAlign: "center", fontSize: "2em"}}>VIZUALIZAÇÃO DA VAGA</Typography>
        
        <Grid container>
          <Grid item xs={2}>
            <Card elevation={0} sx={{ width: "180px" }}>
              <CardMedia component="img" image={PerfilImage} />
            </Card>
          </Grid>

          <Grid item xs={10}>
            <form /*onSubmit={formik.handleSubmit}*/>
              <TextField
                name="projectName"
                value={formik.values.projectName}
                size="small"
                label="NOME DO PROJETO"
                disabled
                sx={{ width: "calc(100% - 16px)", margin: "8px" }}
              />

              <Grid container item>
                <TextField
                  name="course"
                  value={formik.values.course}
                  size="small"
                  label="CURSO"
                  disabled
                  sx={{ width: "55%", margin: "8px" }}
                />

                <TextField
                  name="period"
                  value={formik.values.collegePeriod}
                  size="small"
                  label="PERÍODO IDEAL"
                  disabled
                  sx={{ width: "calc(45% - 32px)", margin: "8px" }}
                />
              </Grid>

              <Grid container item>
                <TextField
                  name="amountHours"
                  value={formik.values.amountHours}
                  size="small"
                  label="CARGA HORÁRIA SEMANAL"
                  disabled
                  sx={{ width: "45%", margin: "8px" }}
                />

                <TextField
                  name="shift"
                  value={formik.values.shift}
                  size="small"
                  label="TURNO"
                  disabled
                  sx={{ width: "calc(55% - 32px)", margin: "8px" }}
                />
              </Grid>

              <Grid container item>
                <TextField
                  name="schedules"
                  value={formik.values.schedules}
                  size="small"
                  label="HORÁRIOS"
                  disabled
                  sx={{ width: "45%", margin: "8px" }}
                />

                <TextField
                  name="numberVacant"
                  value={formik.values.numberVacant}
                  size="small"
                  label="QUANTIDADE DE VAGAS"
                  disabled
                  sx={{ width: "calc(55% - 32px)", margin: "8px" }}
                />
              </Grid>

              <TextField
                name="email"
                value={formik.values.email}
                size="small"
                label="E-MAIL"
                disabled
                sx={{ width: "calc(100% - 16px)", margin: "8px" }}
              />
            </form>
          </Grid>
        </Grid>

        <TextField
          name="description"
          value={formik.values.description}
          size="small"
          multiline
          minRows={3}
          label="DESCRIÇÃO"
          disabled
          sx={{ width: "calc(100% - 16px)", margin: "8px" }}
        />
        <TextField
          name="requirements"
          value={formik.values.requirements}
          size="small"
          multiline
          minRows={3}
          label="REQUISITOS"
          disabled
          sx={{ width: "calc(100% - 16px)", margin: "8px" }}
        />

        <Box>
          <Box sx={{ width: "60%", display: "inline-flex", justifyContent: "right" }}>
            <Button
              type="submit"
              variant="contained"
              sx={{ justifySelf: "center" }}
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
      </Paper>
    </Modal>
  );
};
