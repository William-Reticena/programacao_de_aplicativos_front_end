import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import api from "../../services/api";
import { TextField } from "./style";
import {
  Box,
  Button,
  Grid,
  Modal,
  Paper,
  Typography,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useUserInfo } from "../../context/userContext";

export function ModalShowProjects({ onClose, open }) {
  const [value, setValue] = useState("1");
  const [isDisabled, setIsDisabled] = useState(false);

  const [userData] = useUserInfo();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const scheme = Yup.object().shape({
    projectName: Yup.string().required("Insira seu nome do projeto!"),
    course: Yup.string().required("Insira seu curso de graduação!"),
    collegePeriod: Yup.number()
      .required("Insira um período do curso!")
      .max(10, "Período inválido!")
      .min(1, "Período inválido!"),
    amountHours: Yup.string().required("Informe a quantidade horas semanais!"),
    shift: Yup.string().required("Insira em qual turno você se encontra!"),
    schedules: Yup.string().required("Insira os horários!"),
    numberVacant: Yup.string().required("Insira a quantidade de vagas!"),
    email: Yup.string()
      .email("Insira um email válido!")
      .required("Insira o seu e-mail!"),
    remunerationValue: Yup.number()
      .required("Insira o valor da bolsa!")
      .min(0, "Valor inválido!"),
    description: Yup.string().required("Insira uma descrição!"),
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
      description: "",
      requirements: "",
      remunerationValue: "",
      remuneration_project: "1",
    },
    onSubmit: async (values) => {
      setIsDisabled(true);
      try {
        await api.post("/ProjectStore", {
          name_project: values.projectName,
          ideal_period_project: values.collegePeriod,
          course_project: values.course,
          turno_project: values.shift,
          weekly_workload_project: values.amountHours,
          email_project: values.email,
          schedules_project: values.schedules,
          number_vacancies_project: values.numberVacant,
          description_project: values.description,
          requirements_project: values.requirements,
          remuneration_value_project: values.remunerationValue,
          professor_responsable_project: userData.id,
          remuneration_project: values.remuneration_project,
        });

        alert("Projeto criado com sucesso!");

        document.location.reload();
      } catch (error) {
        console.log("teste", error);
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
                error={
                  formik.touched.projectName &&
                  Boolean(formik.errors.projectName)
                }
                helperText={
                  formik.touched.projectName && formik.errors.projectName
                }
                value={formik.values.projectName}
                onChange={formik.handleChange}
                size="small"
                label="Nome do Projeto"
                sx={{ width: "calc(100% - 16px)", margin: "8px" }}
              />

              <Grid container item>
                <TextField
                  name="course"
                  error={formik.touched.course && Boolean(formik.errors.course)}
                  helperText={formik.touched.course && formik.errors.course}
                  value={formik.values.course}
                  onChange={formik.handleChange}
                  size="small"
                  label="Curso"
                  sx={{ width: "55%", margin: "8px" }}
                />

                <TextField
                  type="number"
                  name="collegePeriod"
                  error={
                    formik.touched.collegePeriod &&
                    Boolean(formik.errors.collegePeriod)
                  }
                  helperText={
                    formik.touched.collegePeriod && formik.errors.collegePeriod
                  }
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
                  error={
                    formik.touched.amountHours &&
                    Boolean(formik.errors.amountHours)
                  }
                  helperText={
                    formik.touched.amountHours && formik.errors.amountHours
                  }
                  value={formik.values.amountHours}
                  onChange={formik.handleChange}
                  size="small"
                  label="Carga horária semanal"
                  sx={{ width: "45%", margin: "8px" }}
                />

                <FormControl sx={{ width: "51%", margin: "8px" }} size="small">
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
                  error={
                    formik.touched.schedules && Boolean(formik.errors.schedules)
                  }
                  helperText={
                    formik.touched.schedules && formik.errors.schedules
                  }
                  value={formik.values.schedules}
                  onChange={formik.handleChange}
                  size="small"
                  label="Horários"
                  sx={{ width: "45%", margin: "8px" }}
                />

                <TextField
                  name="numberVacant"
                  error={
                    formik.touched.numberVacant &&
                    Boolean(formik.errors.numberVacant)
                  }
                  helperText={
                    formik.touched.numberVacant && formik.errors.numberVacant
                  }
                  value={formik.values.numberVacant}
                  onChange={formik.handleChange}
                  size="small"
                  label="Quantidade de vagas"
                  sx={{ width: "calc(55% - 32px)", margin: "8px" }}
                />
              </Grid>

              <TextField
                name="email"
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                value={formik.values.email}
                onChange={formik.handleChange}
                size="small"
                label="E-mail"
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
                        checked={value === "1"}
                        value="1"
                        onChange={handleChange}
                      />
                    }
                    label="Remunerado"
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        name="remuneration_project"
                        checked={value === "0"}
                        value="0"
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
                  value={(formik.values.remunerationValue = "0")}
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
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
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
                  disabled={isDisabled}
                  type="submit"
                  variant="contained"
                  sx={{
                    margin: "0 auto",
                    display: "block",
                  }}
                >
                  Criar
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Modal>
  );
}
