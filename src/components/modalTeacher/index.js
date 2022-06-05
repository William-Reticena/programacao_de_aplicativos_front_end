import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import api from "../../services/api";
import { Favorite, Share } from "@mui/icons-material";
import { TextField } from "./style";
import PerfilImage from "../../images/perfil-image.png";
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
  Typography,
} from "@mui/material";
import api from "../../services/api";

export function ModalTeacher ({ register, onClose, open }) {

  const scheme = Yup.object().shape({
    projectName: Yup
      .string()
      .required("Insira seu nome do projeto!"),
    course: Yup
      .string()
      .required("Insira seu curso de graduação!"),
    collegePeriod: Yup
      .string()
      .required("Insira um período do curso!"),
    amountHours: Yup
      .string()
      .required("Informe a quantidade horas semanais!"),
    shift: Yup
      .string()
      .required("Insira em qual turno você se encontra!"),
    city: Yup
      .string()
      .required("Insira o nome da sua cidade!"),
    schedules: Yup
      .string()
      .required("Insira os horários!"),
    numberVacant: Yup
      .string()
      .required("Insira a quantidade de vagas!"),
    email: Yup
      .string()
      .email("Insira um email válido!")
      .required("Insira o seu e-mail!"),
    remuneration: Yup
      .string()
      .required("Insira o valor da bolsa!"),
    description: Yup
      .string()
      .required("Insira uma descrição!"),
    requirements: Yup
      .string()
      .required("Insira os requisitos da vaga!"),
  });

  const formik = useFormik({
    validationSchema: scheme,
    initialValues: {
      teacherName: "",
      projectName: "",
      course: "",
      collegePeriod: "",
      amountHours: "",
      shift: "",
      schedules: "",
      numberVacant: "",
      email: "",
      remuneration: "",
      description: "",
      requirements: "",
    },
    onSubmit: async (values) => {
      try {
        await api.post("/ProjectUpdate", {
          name_project: values?.projectName,
          course_project: values?.course,
          ideal_period_project: values?.collegePeriod,
          weekly_workload_project: values?.amountHours,
          schedules_project: values?.schedules,
          number_vacancies_project: values?.numberVacant,
          email_project: values?.email,
          remuneration_value_project: values?.remuneration,
          description_project: values?.description,
          requirements_project: values?.requirements,
        });
      } catch (error) {
        console.log("teste", error);
      }
    }
  });

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Paper
        sx={{
          /*display: "flex", flexDirection: "column",*/ width: "80%",
          padding: "16px",
        }}
      >
        <Typography variant="h1" sx={{ textAlign: "center", fontSize: "2em" }}>
          EDITAR VAGA
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Grid container>
            <Grid item xs={2}>
              <Card
                elevation={0}
                sx={{ width: "100%", position: "relative", top: "80px" }}
              >
                <CardMedia component="img" image={PerfilImage} />
              </Card>
            </Grid>

            <Grid item xs={10}>
              <TextField
                name="projectName"
                size="small"
                label="Nome do Projeto"
                error={formik.touched.projectName && Boolean(formik.errors.projectName)}
                helperText={formik.touched.projectName && formik.errors.projectName}
                value={formik.values.projectName}
                onChange={formik.handleChange}
                sx={{ width: "calc(100% - 16px)", margin: "8px" }}
              />

              <Grid container item>
                <TextField
                  name="course"
                  size="small"
                  label="Curso"
                  error={formik.touched.course && Boolean(formik.errors.course)}
                  helperText={formik.touched.course && formik.errors.course}
                  value={formik?.values.course}
                  onChange={formik?.handleChange}
                  sx={{ width: "55%", margin: "8px" }}
                />

                <TextField
                  name="collegePeriod"
                  size="small"
                  label="Período IdealL"
                  error={formik.touched.collegePeriod && Boolean(formik.errors.collegePeriod)}
                  helperText={formik.touched.collegePeriod && formik.errors.collegePeriod}
                  value={formik?.values.collegePeriod}
                  onChange={formik?.handleChange}
                  sx={{ width: "calc(45% - 32px)", margin: "8px" }}
                />
              </Grid>

              <Grid container item>
                <TextField
                  name="amountHours"
                  size="small"
                  label="Carga Horária Semanal"
                  error={formik.touched.amountHours && Boolean(formik.errors.amountHours)}
                  helperText={formik.touched.amountHours && formik.errors.amountHours}
                  value={formik?.values.amountHours}
                  onChange={formik?.handleChange}
                  sx={{ width: "45%", margin: "8px" }}
                />

                <TextField
                  name="shift"
                  size="small"
                  label="Turno"
                  error={formik.touched.shift && Boolean(formik.errors.shift)}
                  helperText={formik.touched.shift && formik.errors.shift}
                  value={formik?.values.shift}
                  onChange={formik?.handleChange}
                  sx={{ width: "calc(55% - 32px)", margin: "8px" }}
                />
              </Grid>

              <Grid container item>
                <TextField
                  name="schedules"
                  size="small"
                  label="Horários"
                  error={formik.touched.schedules && Boolean(formik.errors.schedules)}
                  helperText={formik.touched.schedules && formik.errors.schedules}
                  value={formik?.values.schedules}
                  onChange={formik?.handleChange}
                  sx={{ width: "45%", margin: "8px" }}
                />

                <TextField
                  name="numberVacant"
                  size="small"
                  label="Quantidade de Vagas"
                  error={formik.touched.numberVacant && Boolean(formik.errors.numberVacant)}
                  helperText={formik.touched.numberVacant && formik.errors.numberVacant}
                  value={formik?.values.numberVacant}
                  onChange={formik?.handleChange}
                  sx={{ width: "calc(55% - 32px)", margin: "8px" }}
                />
              </Grid>

              <TextField
                name="email"
                size="small"
                label="E-mail"
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                value={formik?.values.email}
                onChange={formik?.handleChange}
                sx={{ width: "45%", margin: "8px" }}
              />
              <TextField
                name="Valor da bolsa"
                size="small"
                label="Valor da bolsa"
                error={formik.touched.remuneration && Boolean(formik.errors.remuneration)}
                helperText={formik.touched.remuneration && formik.errors.remuneration}
                value={formik?.values.remuneration}
                onChange={formik?.handleChange}
                sx={{ width: "calc(55% - 32px)", margin: "8px" }}
              />
              <TextField
                name="description"
                size="small"
                multiline
                minRows={3}
                label="Descrição"
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
                value={formik?.values.description}
                onChange={formik?.handleChange}
                sx={{ width: "calc(100% - 16px)", margin: "8px" }}
              />
              <TextField
                name="requirements"
                size="small"
                multiline
                minRows={3}
                label="Requisitos"
                error={formik.touched.requirements && Boolean(formik.errors.requirements)}
                helperText={formik.touched.requirements && formik.errors.requirements}
                value={formik?.values.requirements}
                onChange={formik?.handleChange}
                sx={{ width: "calc(100% - 16px)", margin: "8px" }}
              />
              <Box>
                <Box
                  sx={{
                    width: "60%",
                    display: "inline-flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ justifySelf: "center", marginLeft: "40%" }}
                  >
                    Concluir
                  </Button>
                </Box>

                <Box
                  sx={{
                    width: "calc(40% - 8px)",
                    display: "inline-flex",
                    justifyContent: "right",
                  }}
                >
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
}
