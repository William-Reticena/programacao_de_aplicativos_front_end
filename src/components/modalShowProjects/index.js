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
} from "@mui/material";
import { useUserInfo } from "../../context/userContext";

export function ModalShowProjects({ onClose, open }) {
  const [value, setValue] = useState("sim");
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
      .max(10,'Período inválido!')
      .min(1,'Período inválido!'),
    amountHours: Yup.string().required("Informe a quantidade horas semanais!"),
    shift: Yup.string().required("Insira em qual turno você se encontra!"),
    schedules: Yup.string().required("Insira os horários!"),
    numberVacant: Yup.string().required("Insira a quantidade de vagas!"),
    email: Yup.string()
      .email("Insira um email válido!")
      .required("Insira o seu e-mail!"),
    remunerationValue: Yup.number().required("Insira o valor da bolsa!")
    .min(0,'Valor inválido!'),
    description: Yup.string().required("Insira uma descrição!"),
    requirements: Yup.string().required("Insira os requisitos da vaga!"),
  });

  const formik = useFormik({
    validationSchema: scheme,
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
      remunerationValue: "0",
      remuneration_project: "sim",
    },
    onSubmit: async (values) => {
      setIsDisabled(true);
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
          professor_responsable_project: userData.username_professor,
          remuneration_project: values.remuneration_project,
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

                <TextField
                  name="shift"
                  error={formik.touched.shift && Boolean(formik.errors.shift)}
                  helperText={formik.touched.shift && formik.errors.shift}
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
                    // value="sim"
                    control={
                      <Radio
                        name="remuneration_project"
                        checked={value === "sim"}
                        value="sim"
                        onChange={handleChange}
                      />
                    }
                    label="Remunerado"
                  />
                  <FormControlLabel
                    // value="nao"
                    control={
                      <Radio
                        name="remuneration_project"
                        checked={value === "nao"}
                        value="nao"
                        onChange={handleChange}
                      />
                    }
                    label="Não Remunerado"
                  />
                </RadioGroup>
              </FormControl>
              
                {value === "nao" ? (
                  <TextField
                    name="remunerationValue"
                    value={(formik.remuneration_project = "")}
                    disabled
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
                    value={formik.remuneration_project}
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
                error={
                  formik.touched.requirements &&
                  Boolean(formik.errors.requirements)
                }
                helperText={
                  formik.touched.requirements && formik.errors.requirements
                }
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
                {/* </Box> */}
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Modal>
  );
}
