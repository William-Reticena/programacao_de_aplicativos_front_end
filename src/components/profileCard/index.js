import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import PerfilImage from "../../images/perfil-image.png";
import { TextField } from "./style";
import api from "../../services/api";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Input,
  Paper,
  Typography,
} from "@mui/material";

export function ProfileCard({ userData, onClose }) {
  const [radioValue, setRadioValue] = useState("student");
  const [refFileInput, setRefFileInput] = useState(null);
  const [refCardMedia, setRefCardMedia] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setRefFileInput(document.getElementById("fileInput"));
    setRefCardMedia(document.getElementById("cardMedia"));
  }, [setRefFileInput, setRefCardMedia]);

  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };

  const scheme = Yup.object().shape({
    city: Yup.string().required("Insira o nome da sua cidade!"),
    cellphone: Yup.string().required("Insira seu número de celular!"),
    email: Yup.string()
      .email("Insira um email válido!")
      .required("Insira o seu e-mail!"),
     password: Yup.string().notRequired(' Insira uma nova senha')
      .min(6, "A senha deve ter pelo menos 6 caracteres"),
    passwordConfirmation: Yup.string()
       .oneOf([Yup.ref('password'), null], 'Senhas inválidas'),
  });

  console.log(userData);

  const formik = useFormik({
    validationSchema: scheme,
    initialValues: {
      id: userData.id,
      type: userData.type, //não tem
      image: "", //não tem
      imageURL: "", //não tem
      fullName: userData.username_student, //ok
      course: userData.course_student, //ok
      // course: register ? "" : "BCC", //ok
      collegePeriod: userData.period_student,
      ra: userData.ra_student,
      shift: userData.turno_student,
      city: userData.city_student,
      cellphone: userData.contact_student,
      email: userData.email_student,
      description: userData.description_student,
      password: "",
      passwordConfirmation: "",
    },
    onSubmit: async (values) => {
      setIsDisabled(true);
      try {
        await api.post("/StudentUpdate", {
          //tá errado o back as info não batem com a rota
          id: values.id,
          username_student: values.fullName,
          // password_student: values.passwordConfirmation,
          course_student: values.course,
          turno_student: values.shift,
          email_student: values.email,
          contact_student: values.cellphone,
          city_student: values.city,
          description_student: values.description,
        });
        onClose();
      } catch (error) {
        setIsDisabled(false);
        console.log("teste", error);
      }
    },
    // onSubmit: async (values) => {
    //   alert(JSON.stringify(values, null, 2));
    // },
  });

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
  };

  return (
    <Paper
      sx={{
        width: "80%",
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
              name="password"
              type="password"
              size="small"
              label="Nova senha"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              sx={{ width: "45%", margin: "8px" }}
            />

            <TextField
              name="passwordConfirmation"
              type="password"
              size="small"
              label="Confirmar senha"
              value={formik.values.passwordConfirmation}
              onChange={formik.handleChange}
              error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
              helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
              sx={{ width: "calc(55% - 32px)", margin: "8px" }}
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
                disabled={isDisabled}
                type="submit"
                variant="contained"
                sx={{marginRight: "16px"  }}
              >
                Concluir
              </Button>

              <Button color="error" variant="contained" onClick={onClose}>
                Cancelar
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
}
