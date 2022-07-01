import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Box, Button, Grid, Modal, Paper, Typography,Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  InputLabel, 
  MenuItem, 
  Select } from "@mui/material";
import api from "../../services/api";
import { TextField } from "./style";

export function ModalTeacher({ infos, onClose, open }) {
  const [isDisabled, setIsDisabled] = useState(false);

  const [value, setValue] = useState(infos.remuneration_project);

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  const scheme = Yup.object().shape({
    projectName: Yup.string().required("Insira seu nome do projeto!"),
    course: Yup.string().required("Insira seu curso de graduação!"),
    collegePeriod: Yup.number()
      .required("Insira um período do curso!")
      .max(10, "Período inválido!")
      .min(1,'Período inválido!'),
    amountHours: Yup.string().required("Informe a quantidade horas semanais!"),
    shift: Yup.string().required("Insira em qual turno você se encontra!"),
    schedules: Yup.string().required("Insira os horários!"),
    numberVacant: Yup.string().required("Insira a quantidade de vagas!"),
    email: Yup.string()
      .email("Insira um email válido!")
      .required("Insira o seu e-mail!"),
    remunerationValue: Yup.string().required("Insira o valor da bolsa!")
      .min(1,'Valor inválido!'),
    description: Yup.string().required("Insira uma descrição!"),
  });
console.log(infos);
  const formik = useFormik({
    validationSchema: scheme,
    initialValues: {
      id: infos.id,
      teacherName: infos.professor_responsable_project,
      projectName: infos.name_project,
      course: infos.course_project,
      collegePeriod: infos.ideal_period_project,
      amountHours: infos.weekly_workload_project,
      shift: infos.turno_project,
      schedules: infos.schedules_project,
      numberVacant: infos.number_vacancies_project,
      email: infos.email_project,
      remuneration_project: infos.remuneration_project,
      description: infos.description_project,
      remunerationValue: infos.remuneration_value_project,
      requirements: infos.requirements_project,
    },
    onSubmit: async (values) => {
      setIsDisabled(true);

      try {
        await api.post("/ProjectUpdate", {
          id: values.id,
          name_project: values.projectName,
          course_project: values.course,
          turno_project: values.shift,
          ideal_period_project: values.collegePeriod,
          weekly_workload_project: values.amountHours,
          schedules_project: values.schedules,
          number_vacancies_project: values.numberVacant,
          email_project: values.email,
          remuneration_project: values.remuneration_project,
          remuneration_value_project: values.remunerationValue,
          description_project: values?.description,
          requirements_project: values?.requirements,
        });

        alert("Projeto atualizado com sucesso!");

        document.location.reload();
      } catch (error) {
        console.log("teste", error);
      }
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
                  type="number"
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

                <FormControl sx={{width: "51%", margin: "8px"}} size= "small">
                  <InputLabel id="select-shift">Turno</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    label="Turno"
                    id="select-shift"
                    name="shift"
                    value={formik.values.shift}
                    onChange={formik.handleChange}
                  >
                    <MenuItem value={"Manhã"}>Manhã</MenuItem>
                    <MenuItem value={"Tarde"}>Tarde</MenuItem>
                  </Select>
                </FormControl>
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
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="remuneration_project_group"
                  value={value}
                  onChange={formik.handleChange}
                  name="remuneration_project"
                >
                  <FormControlLabel
                    control={
                      <Radio
                        name="remuneration_project"
                        checked={value === 1}
                        value={1}
                        onChange={handleChange}
                      />
                    }
                    label="Remunerado"
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        name="remuneration_project"
                        checked={value === 0}
                        value={0}
                        onChange={handleChange}
                      />
                    }
                    label="Não Remunerado"
                  />
                </RadioGroup>
              </FormControl>
              
                {value === "0" ? (
                  <TextField
                    name="remunerationValue"
                    disabled
                    value={formik.values.remunerationValue = "0"}
                    onChange={formik.handleChange}
                    size="small"
                    label="Valor da bolsa"
                    sx={{ width: "calc(25% - 33px)", margin: "8px" }}
                  />
                ) : (
                  <TextField
                    name="remunerationValue"
                    error={
                      formik.touched.remunerationValue &&
                      Boolean(formik.errors.remunerationValue)
                    }
                    helperText={
                      formik.touched.remunerationValue &&
                      formik.errors.remunerationValue
                    }
                    value={formik.values.remunerationValue}
                    onChange={formik.handleChange}
                    size="small"
                    label="Valor da bolsa"
                    fullWidth
                    sx={{ width: "calc(25% - 33px)", margin: "8px" }}
                  />
                )}

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
                value={formik.values.requirements}
                onChange={formik.handleChange}
                sx={{ width: "calc(100% - 16px)", margin: "8px" }}
              />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  disabled={isDisabled}
                  type="submit"
                  variant="contained"
                >
                  Concluir
                </Button>

                <Button
                  variant="contained"
                  color="error"
                  sx={{
                    margin: "0 16px",
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
