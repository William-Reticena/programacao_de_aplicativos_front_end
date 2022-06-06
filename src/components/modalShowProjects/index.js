import React from "react";
import { useFormik } from "formik";
import api from "../../services/api";
import { TextField } from "./style";
import { Box, Button, Grid, Modal, Paper, Typography } from "@mui/material";

export function ModalShowProjects({ register, onClose, open }) {
  const formik = useFormik({
    initialValues: {
      teacherName: "", //ok
      projectName: "", //ok
      course: "", //ok
      collegePeriod: "", //ok
      amountHours: "", //ok
      shift: "", //não tem
      schedules: "", //ok
      numberVacant: "", //ok
      email: "", //ok
      description: "", //ok
      requirements: "", //ok
      remunerationValue: "",
    },
    onSubmit: async (values) => {
      try {
        await api.post("/ProjectStore", {
          name_project: values.projectName,
          ideal_period_project: values.collegePeriod,
          course_project: values.course,
          weekly_workload_project: values.amountHours,
          email_project: values.email,
          schedules_project: values.schedules,
          number_vacancies_project: values.numberVacant,
          description_project: values.description,
          requirements_project: values.requirements,
          // remuneration_internship: "",
          remuneration_value_project: values.remunerationValue,
          professor_responsable_project: "WILLIAM",
        });

        alert("Projeto criado com sucesso!");

        document.location.reload();
      } catch (error) {
        // console.log("teste", error);
      }
    },
    // onSubmit: (values) => {
    //   alert(JSON.stringify(values, null, 2));
    // },
  });

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
          Criar Projeto
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                name="projectName"
                value={formik.values.projectName}
                onChange={formik.handleChange}
                size="small"
                label="Nome do Projeto"
                sx={{ width: "calc(100% - 16px)", margin: "8px" }}
              />

              <Grid container item>
                <TextField
                  name="course"
                  value={formik.values.course}
                  onChange={formik.handleChange}
                  size="small"
                  label="Curso"
                  sx={{ width: "55%", margin: "8px" }}
                />

                <TextField
                  name="collegePeriod"
                  value={formik.values.collegePeriod}
                  onChange={formik.handleChange}
                  size="small"
                  label="Perído ideal"
                  sx={{ width: "calc(45% - 32px)", margin: "8px" }}
                />
              </Grid>

              <Grid container item>
                <TextField
                  name="amountHours"
                  value={formik.values.amountHours}
                  onChange={formik.handleChange}
                  size="small"
                  label="Carga horária semanal"
                  sx={{ width: "45%", margin: "8px" }}
                />

                <TextField
                  name="shift"
                  value={formik.values.shift}
                  onChange={formik.handleChange}
                  size="small"
                  label="Turno"
                  sx={{ width: "calc(55% - 32px)", margin: "8px" }}
                />
              </Grid>

              <Grid container item>
                <TextField
                  name="schedules"
                  value={formik.values.schedules}
                  onChange={formik.handleChange}
                  size="small"
                  label="Horários"
                  sx={{ width: "45%", margin: "8px" }}
                />

                <TextField
                  name="numberVacant"
                  value={formik.values.numberVacant}
                  onChange={formik.handleChange}
                  size="small"
                  label="Quantidade de vagas"
                  sx={{ width: "calc(55% - 32px)", margin: "8px" }}
                />
              </Grid>

              <TextField
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                size="small"
                label="E-mail"
                sx={{ width: "45%", margin: "8px" }}
              />
              <TextField
                name="remunerationValue"
                value={formik.values.remunerationValue}
                onChange={formik.handleChange}
                size="small"
                label="Valor da bolsa"
                sx={{ width: "calc(55% - 32px)", margin: "8px" }}
              />
              <TextField
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                size="small"
                multiline
                minRows={3}
                label="Descrição"
                sx={{ width: "calc(100% - 16px)", margin: "8px" }}
              />
              <TextField
                name="requirements"
                value={formik.values.requirements}
                onChange={formik.handleChange}
                size="small"
                multiline
                minRows={3}
                label="Requisitos"
                sx={{ width: "calc(100% - 16px)", margin: "8px" }}
              />
              <Box>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    margin: "0 auto",
                    display: "block",
                  }}
                >
                  Criar
                </Button>
                {/* </Box> */}
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Modal>
  );
}
