import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import api from "../../services/api";
import { TextField } from "./style";
import { Box, Button, Grid, Modal, Paper, Typography } from "@mui/material";

export function ModalTeacher({ infos, register, onClose, open }) {
  const scheme = Yup.object().shape({
    projectName: Yup.string().required("Insira seu nome do projeto!"),
    course: Yup.string().required("Insira seu curso de graduação!"),
    collegePeriod: Yup.number().required("Insira um período do curso!")
    .max(10,'Período inválido!'),
    amountHours: Yup.string().required("Informe a quantidade horas semanais!"),
    shift: Yup.string().required("Insira em qual turno você se encontra!"),
    schedules: Yup.string().required("Insira os horários!"),
    numberVacant: Yup.string().required("Insira a quantidade de vagas!"),
    email: Yup.string()
      .email("Insira um email válido!")
      .required("Insira o seu e-mail!"),
    remuneration: Yup.string().required("Insira o valor da bolsa!"),
    description: Yup.string().required("Insira uma descrição!"),
    requirements: Yup.string().required("Insira os requisitos da vaga!"),
  });

  const formik = useFormik({
    validationSchema: scheme,
    initialValues: {
      id: infos.id,
      teacherName: infos.professor_responsable_project,
      projectName: infos.name_project,
      course: infos.course_project,
      collegePeriod: infos.ideal_period_project,
      amountHours: infos.weekly_workload_project,
      shift: "",
      schedules: infos.schedules_project,
      numberVacant: infos.number_vacancies_project,
      email: infos.email_project,
      remuneration: infos.remuneration_value_project,
      description: infos.description_project,
      requirements: infos.requirements_project,
    },
    onSubmit: async (values) => {
      console.log("value", values.id);
      try {
        await api.post("/ProjectUpdate", {
          id: values.id,
          name_project: values.projectName,
          course_project: values.course,
          ideal_period_project: values.collegePeriod,
          weekly_workload_project: values.amountHours,
          schedules_project: values.schedules,
          number_vacancies_project: values.numberVacant,
          email_project: values.email,
          remuneration_value_project: values.remuneration,
          description_project: values?.description,
          requirements_project: values?.requirements,
        });

        alert("Projeto atualizado com sucesso!");

        document.location.reload();
      } catch (error) {
        console.log("teste", error);
      }
      // onSubmit: (values) => {
      //   alert(JSON.stringify(values, null, 2));
      // },
    },
  });

  const handleDelete = async (id) => {
    try {
      await api.post("/ProjectDestroy", { id });

      alert("Projeto excluído com sucesso!");

      document.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Paper
        sx={{
          width: "80%",
          padding: "16px",
        }}
      >
        <Typography variant="h1" sx={{ textAlign: "center", fontSize: "2em" }}>
          Editar Vaga
        </Typography>

        <Grid container>
          <Grid item xs={12}>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                name="projectName"
                size="small"
                label="Nome do Projeto"
                error={
                  formik.touched.projectName &&
                  Boolean(formik.errors.projectName)
                }
                helperText={
                  formik.touched.projectName && formik.errors.projectName
                }
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
                  value={formik.values.course}
                  onChange={formik.handleChange}
                  sx={{ width: "55%", margin: "8px" }}
                />

                <TextField
                  type= "number"
                  name="collegePeriod"
                  size="small"
                  label="Período Ideal"
                  error={
                    formik.touched.collegePeriod &&
                    Boolean(formik.errors.collegePeriod)
                  }
                  helperText={
                    formik.touched.collegePeriod && formik.errors.collegePeriod
                  }
                  value={formik.values.collegePeriod}
                  onChange={formik.handleChange}
                  sx={{ width: "calc(45% - 32px)", margin: "8px" }}
                />
              </Grid>

              <Grid container item>
                <TextField
                  name="amountHours"
                  size="small"
                  label="Carga Horária Semanal"
                  error={
                    formik.touched.amountHours &&
                    Boolean(formik.errors.amountHours)
                  }
                  helperText={
                    formik.touched.amountHours && formik.errors.amountHours
                  }
                  value={formik.values.amountHours}
                  onChange={formik.handleChange}
                  sx={{ width: "45%", margin: "8px" }}
                />

                <TextField
                  name="shift"
                  size="small"
                  label="Turno"
                  error={formik.touched.shift && Boolean(formik.errors.shift)}
                  helperText={formik.touched.shift && formik.errors.shift}
                  value={formik.values.shift}
                  onChange={formik.handleChange}
                  sx={{ width: "calc(55% - 32px)", margin: "8px" }}
                />
              </Grid>

              <Grid container item>
                <TextField
                  name="schedules"
                  size="small"
                  label="Horários"
                  error={
                    formik.touched.schedules && Boolean(formik.errors.schedules)
                  }
                  helperText={
                    formik.touched.schedules && formik.errors.schedules
                  }
                  value={formik.values.schedules}
                  onChange={formik.handleChange}
                  sx={{ width: "45%", margin: "8px" }}
                />

                <TextField
                  name="numberVacant"
                  size="small"
                  label="Quantidade de Vagas"
                  error={
                    formik.touched.numberVacant &&
                    Boolean(formik.errors.numberVacant)
                  }
                  helperText={
                    formik.touched.numberVacant && formik.errors.numberVacant
                  }
                  value={formik.values.numberVacant}
                  onChange={formik.handleChange}
                  sx={{ width: "calc(55% - 32px)", margin: "8px" }}
                />
              </Grid>

              <TextField
                name="email"
                size="small"
                label="E-mail"
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                value={formik.values.email}
                onChange={formik.handleChange}
                sx={{ width: "45%", margin: "8px" }}
              />
              <TextField
                name="remuneration"
                size="small"
                label="Valor da bolsa"
                error={
                  formik.touched.remuneration &&
                  Boolean(formik.errors.remuneration)
                }
                helperText={
                  formik.touched.remuneration && formik.errors.remuneration
                }
                value={formik.values.remuneration}
                onChange={formik.handleChange}
                sx={{ width: "calc(55% - 32px)", margin: "8px" }}
              />
              <TextField
                name="description"
                size="small"
                multiline
                minRows={3}
                label="Descrição"
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
                value={formik.values.description}
                onChange={formik.handleChange}
                sx={{ width: "calc(100% - 16px)", margin: "8px" }}
              />
              <TextField
                name="requirements"
                size="small"
                multiline
                minRows={3}
                label="Requisitos"
                error={
                  formik.touched.requirements &&
                  Boolean(formik.errors.requirements)
                }
                helperText={
                  formik.touched.requirements && formik.errors.requirements
                }
                value={formik.values.requirements}
                onChange={formik.handleChange}
                sx={{ width: "calc(100% - 16px)", margin: "8px" }}
              />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={
                    {
                      // margin: "0 auto",
                      // display: "inline-block",
                    }
                  }
                >
                  Concluir
                </Button>

                <Button
                  variant="contained"
                  color="error"
                  sx={{
                    margin: "0 16px",
                    // display: "inline-block",
                  }}
                  onClick={() => handleDelete(formik.values.id)}
                >
                  Excluir
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
}
