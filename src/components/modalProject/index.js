import React from "react";
import { useFormik } from "formik";
import { TextField } from "./style";
import { Box, Button, Grid, Modal, Paper, Typography } from "@mui/material";
import api from "../../services/api";

export function ModalProject({ data, onClose, open, userId }) {
  const formik = useFormik({
    initialValues: {
      teacherName: data.professor_responsable_project,
      projectName: data.name_project,
      course: data.course_project,
      collegePeriod: data.ideal_period_project,
      amountHours: data.weekly_workload_project,
      shift: data.turno_project,
      schedules: data.schedules_project,
      numberVacant: data.number_vacancies_project,
      email: data.email_project,
      description: data.description_project,
      requirements: data.requirements_project,
      remunerationValue: data.remuneration_value_project,
    },
    onSubmit: () => {
      api.post("/CandidateStore", {
        status_candidate: 1,
        student_candidate: userId,
        project_candidate: data.id,
      });
    },
  });
  console.log("data",  data);
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
          Visualizar vaga
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Grid>
            <TextField
              name="projectName"
              value={formik.values.projectName}
              size="small"
              label="Nome do Projeto"
              disabled
              sx={{ width: "calc(100% - 16px)", margin: "8px" }}
            />

            <Grid container item>
              <TextField
                name="course"
                value={formik.values.course}
                size="small"
                label="Curso"
                disabled
                sx={{ width: "55%", margin: "8px" }}
              />

              <TextField
                name="period"
                value={formik.values.collegePeriod}
                size="small"
                label="Período Ideal"
                disabled
                sx={{ width: "calc(45% - 32px)", margin: "8px" }}
              />
            </Grid>

            <Grid container item>
              <TextField
                name="amountHours"
                value={formik.values.amountHours}
                size="small"
                label="Carga Horária Semanal"
                disabled
                sx={{ width: "45%", margin: "8px" }}
              />

              <TextField
                name="shift"
                value={formik.values.shift}
                size="small"
                label="Turno"
                disabled
                sx={{ width: "calc(55% - 32px)", margin: "8px" }}
              />
            </Grid>

            <Grid container item>
              <TextField
                name="schedules"
                value={formik.values.schedules}
                size="small"
                label="Horários"
                disabled
                sx={{ width: "45%", margin: "8px" }}
              />

              <TextField
                name="numberVacant"
                value={formik.values.numberVacant}
                size="small"
                label="Quantidade de Vagas"
                disabled
                sx={{ width: "calc(55% - 32px)", margin: "8px" }}
              />
            </Grid>

            <TextField
              name="email"
              value={formik.values.email}
              size="small"
              label="E-mail"
              disabled
              sx={{ width: "45%", margin: "8px" }}
            />
            <TextField
              name="remunerationValue"
              value={formik.values.remunerationValue}
              size="small"
              label="Valor da bolsa"
              disabled
              sx={{ width: "calc(55% - 32px)", margin: "8px" }}
            />
          </Grid>

          <TextField
            name="description"
            value={formik.values.description}
            size="small"
            multiline
            minRows={3}
            label="Descrição"
            disabled
            sx={{ width: "calc(100% - 16px)", margin: "8px" }}
          />
          <TextField
            name="requirements"
            value={formik.values.requirements}
            size="small"
            multiline
            minRows={3}
            label="Requisitos"
            disabled
            sx={{ width: "calc(100% - 16px)", margin: "8px" }}
          />

          <Box>
            <Box
              sx={{
                width: "60%",
                display: "inline-flex",
                justifyContent: "right",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{ justifySelf: "center" }}
              >
                INSCREVER-SE
              </Button>
            </Box>
          </Box>
        </form>
      </Paper>
    </Modal>
  );
}
