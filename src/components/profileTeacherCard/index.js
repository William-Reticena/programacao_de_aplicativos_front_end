import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import PerfilImage from "../../images/perfil-image.png";
import { NavigationButton } from "../../components";
import { LOGIN } from "../../routes/routes";
import { TextField } from "./style";
import api from "../../services/api";
import {
  Box,
  Button,
  Card,
  CardMedia,
  FormControlLabel,
  Grid,
  Input,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

export function ProfileTeacherCard({ register, userData, onClose }) {
  const [radioValue, setRadioValue] = useState("student");
  const [userInfos, setUserInfos] = useState({});
  const [refFileInput, setRefFileInput] = useState(null);
  const [refCardMedia, setRefCardMedia] = useState(null);

  useEffect(() => {
    setRefFileInput(document.getElementById("fileInput"));
    setRefCardMedia(document.getElementById("cardMedia"));
  }, [setRefFileInput, setRefCardMedia]);

  // useEffect(() => {
  //   if (radioValue === "teacher") {
  //     setFunctionPost();
  //   } else {
  //     setFunctionPost(userStudent);
  //   }
  // }, [radioValue]);

  // const userStudent = async (values) => {
  //   // console.log("vlaore", values);
  //   try {
  //     await api.post("/StudentStore", {
  //       username_student: values?.fullName,
  //       password_student: "1256",
  //       course_student: values?.course,
  //       email_student: values?.email,
  //       contact_student: values?.cellphone,
  //       city_student: values?.city,
  //       description_student: values?.description,
  //       image_student: values?.imageURL,
  //       ra_student: values?.ra,
  //       period_student: values?.collegePeriod
  //     });
  //   } catch (error) {
  //     console.log("teste", error);
  //   }
  // }
  // const [functionPost, setFunctionPost] = useState(userStudent);

  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };

  const scheme = Yup.object().shape({
    fullName: Yup.string().required("Insira seu nome completo!"),
    course: Yup.string().required("Insira seu curso de graduação!"),
    collegePeriod: Yup.number()
      .positive("Deve ser um número positivo!")
      .integer("Deve ser um número inteiro!")
      .required("Insira o período em que você se encontra!"),
    ra: Yup.string().required("Insira seu RA!"),
    shift: Yup.string().required("Insira em qual turno você se encontra!"),
    city: Yup.string().required("Insira o nome da sua cidade!"),
    cellphone: Yup.string().required("Insira seu número de celular!"),
    email: Yup.string()
      .email("Insira um email válido!")
      .required("Insira o seu e-mail!"),
  });

  const formik = useFormik({
    validationSchema: scheme,
    initialValues: {
      type: "teacher",
      image: "", // não tem
      imageURL: "", // não tem
      fullName: register ? "" : "Paula", //ok
      course: register ? "" : "BCC", //ok
      collegePeriod: register ? "" : 6, //não tem
      ra: register ? "" : "4568703",
      shift: register ? "" : "integral (T/N)",
      city: register ? "" : "Campo Mourão",
      cellphone: register ? "" : "(00) 00000-0000",
      email: register ? "" : "pa23@gmfgffdggfghail.com",
      description: register ? "" : "",
    },
    onSubmit: async (values) => {
      try {
        await api.post("/ProfessorUpdate", {
          id: "",
          username_professor: values?.fullName,
          password_professor: values?.password,
          course_professor: values?.course,
          email_professor: values?.email,
          contact_professor: values?.cellphone,
          city_professor: values?.city,
          description_professor: values?.description,
          status_professor: 0,
        });
      } catch (error) {
        // console.log("teste", error);
      }
    },
    // onSubmit: async (values) => {
    //   alert(JSON.stringify(values, null, 2));
    // },
  });

  // const handleBackLogin = () => (
  //   <NavigationButton to={LOGIN} />
  // );

  const handleClick = (event) => {
    refFileInput.click();

    refFileInput.addEventListener("change", (event) => {
      const reader = new FileReader();

      reader.onload = () => {
        refCardMedia.src = reader.result;
      };

      reader.readAsDataURL(refFileInput.files[0]);

      formik.setFieldValue(
        "imageURL",
        URL.createObjectURL(refFileInput.files[0])
      );
    });

    console.log(refFileInput);
  };

  return (
    <Paper
      sx={{
        /*display: "flex", flexDirection: "column",*/ width: "80%",
        padding: "16px",
      }}
    >
      <Typography
        sx={{ textAlign: "center", fontSize: "2em", marginBottom: "16px" }}
      >
        PERFIL
      </Typography>

      <Grid container>
        <Grid item xs={2}>
          <Card
            elevation={0}
            sx={{
              backgroundSize: "contain",
              display: "flex",
              alignItems: "center",
              maxHeight: "200px",
              minHeight: "200px",
              maxWidth: "180px",
              marginTop: "40%",
              cursor: "pointer",
            }}
            onClick={handleClick}
          >
            <CardMedia
              component="img"
              image={PerfilImage}
              id="cardMedia"
              sx={{ backgroundSize: "contain" }}
            />
          </Card>
        </Grid>

        <Grid item xs={10}>
          <form onSubmit={formik?.handleSubmit}>
            <Input
              type="file"
              id="fileInput"
              name="image"
              inputProps={{
                accept: "image/*",
              }}
              onChange={formik.handleChange}
              sx={{ display: "none" }}
            />

            {/* {register && 
              <RadioGroup 
                onChange={formik?.handleChange}
                sx={{ flexDirection: "row", marginLeft: "1%" }}
              >
                <FormControlLabel 
                  control={
                    <Radio 
                      name="type"
                      checked={radioValue === "student"}
                      value="student"
                      onChange={handleChange}
                    />
                  }
                  label="Aluno"
                />

                <FormControlLabel 
                  control={
                    <Radio
                      name="type"
                      checked={radioValue === "teacher"}
                      value="teacher"
                      onChange={handleChange}
                    />
                  }
                  label="Professor"
                />
              </RadioGroup>
            } */}

            <TextField
              disabled
              name="fullName"
              size="small"
              label="Nome Completo"
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
              value={formik?.values.fullName}
              onChange={formik?.handleChange}
              sx={{ width: "calc(100% - 16px)", margin: "8px" }}
            />

            <Grid container item>
              <TextField
                disabled
                name="course"
                size="small"
                label="Curso"
                error={formik.touched.course && Boolean(formik.errors.course)}
                helperText={formik.touched.course && formik.errors.course}
                value={formik?.values.course}
                onChange={formik?.handleChange}
                sx={{
                  width: radioValue === "student" ? "55%" : "100%",
                  margin: "8px",
                }}
              />

              {radioValue === "student" && (
                <TextField
                  type="number"
                  disabled
                  name="collegePeriod"
                  size="small"
                  label="Período"
                  error={
                    formik.touched.collegePeriod &&
                    Boolean(formik.errors.collegePeriod)
                  }
                  helperText={
                    formik.touched.collegePeriod && formik.errors.collegePeriod
                  }
                  value={formik?.values.collegePeriod}
                  onChange={formik?.handleChange}
                  sx={{ width: "calc(45% - 32px)", margin: "8px" }}
                />
              )}
            </Grid>

            <Grid container item>
              <TextField
                disabled
                name="ra"
                size="small"
                label={radioValue === "student" ? "RA" : "ID"}
                error={formik.touched.ra && Boolean(formik.errors.ra)}
                helperText={formik.touched.ra && formik.errors.ra}
                value={formik?.values.ra}
                onChange={formik?.handleChange}
                sx={{ width: "45%", margin: "8px" }}
              />

              <TextField
                disabled
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
                name="city"
                size="small"
                label="Cidade"
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
                value={formik?.values.city}
                onChange={formik?.handleChange}
                sx={{ width: "45%", margin: "8px" }}
              />

              <TextField
                name="cellphone"
                size="small"
                label="Celular"
                error={
                  formik.touched.cellphone && Boolean(formik.errors.cellphone)
                }
                helperText={formik.touched.cellphone && formik.errors.cellphone}
                value={formik?.values.cellphone}
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
              sx={{ width: "calc(100% - 16px)", margin: "8px" }}
            />

            <TextField
              name="description"
              size="small"
              multiline
              minRows={3}
              label="Descrição"
              value={formik?.values.description}
              onChange={formik?.handleChange}
              sx={{ width: "calc(100% - 16px)", margin: "8px" }}
            />

            <Box
              sx={{
                width: "100%",
                display: "inline-flex",
                justifyContent: "center",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{ marginRight: "16px" }}
              >
                Concluir
              </Button>

              {register && (
                <NavigationButton to={LOGIN}>
                  <Button color="error" variant="contained">
                    Cancelar
                  </Button>
                </NavigationButton>
              )}

              {!register && (
                <Button color="error" variant="contained" onClick={onClose}>
                  Cancelar
                </Button>
              )}
            </Box>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
}
