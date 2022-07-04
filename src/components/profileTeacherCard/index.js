import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
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
import Avatar from "../../images/avatar.jpg";

export function ProfileTeacherCard({ register, userData, onClose }) {
  const [refFileInput, setRefFileInput] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [refCardMedia, setRefCardMedia] = useState(null);

  useEffect(() => {
    setRefFileInput(document.getElementById("fileInput"));
    setRefCardMedia(document.getElementById("cardMedia"));
  }, [setRefFileInput, setRefCardMedia]);

  const scheme = Yup.object().shape({
    city: Yup.string().required("Insira o nome da sua cidade!"),
    cellphone: Yup.string().required("Insira seu número de celular!"),
    email: Yup.string()
      .email("Insira um email válido!")
      .required("Insira o seu e-mail!"),
    password: Yup.string()
      .notRequired(" Insira uma nova senha")
      .min(6, "A senha deve ter pelo menos 6 caracteres"),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Senhas inválidas"
    ),
  });

  console.log("update", userData);

  const formik = useFormik({
    validationSchema: scheme,
    initialValues: {
      id: userData.id,
      idTeacher: userData.id_professor,
      type: userData.type,
      image: "",
      imageURL: "",
      fullName: userData.username_professor,
      course: userData.course_professor,
      shift: userData.turno_professor,
      city: userData.city_professor,
      cellphone: userData.contact_professor,
      email: userData.email_professor,
      description: userData.description_professor,
      password: "",
      passwordConfirmation: "",
    },
    onSubmit: async (values) => {
      setIsDisabled(true);
      const {
        imageURL,
        fullName,
        course,
        idTeacher,
        id,
        shift,
        city,
        cellphone,
        email,
        password,
        description,
      } = values;

      const file = new FormData();

      file.append("file", imageURL);
      file.append("id", id);
      file.append("username_professor", fullName);
      file.append("password_professor", password);
      file.append("course_professor", course);
      file.append("id_professor", idTeacher);
      file.append("turno_professor", shift);
      file.append("email_professor", email);
      file.append("contact_professor", cellphone);
      file.append("city_professor", city);
      file.append("description_professor", description);
      file.append("status_professor", 0);

      try {
        await api.post("/ProfessorUpdate", file);
        onClose();
        document.location.reload();
      } catch (error) {
        console.log("teste", error);
      }
    },
  });

  const handleClick = (event) => {
    refFileInput.click();

    refFileInput.addEventListener("change", (event) => {
      const reader = new FileReader();

      reader.onload = () => {
        refCardMedia.src = reader.result;
        formik.setFieldValue("imageURL", refFileInput.files[0]);
      };

      reader.readAsDataURL(refFileInput.files[0]);
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
            {userData.img ? (
              <CardMedia
                component="img"
                image={userData.img?.url}
                id="cardMedia"
                sx={{ backgroundSize: "contain" }}
              />
            ) : (
              <CardMedia
                component="img"
                image={Avatar}
                id="cardMedia"
                sx={{ backgroundSize: "contain" }}
              />
            )}
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
                value={formik?.values.course}
                onChange={formik?.handleChange}
                sx={{ width: "100%", margin: "8px" }}
              />
            </Grid>

            <Grid container item>
              <TextField
                disabled
                name="id"
                size="small"
                label="ID"
                value={formik?.values.id}
                onChange={formik?.handleChange}
                sx={{ width: "45%", margin: "8px" }}
              />

              <TextField
                disabled
                name="shift"
                size="small"
                label="Turno"
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
              error={
                formik.touched.passwordConfirmation &&
                Boolean(formik.errors.passwordConfirmation)
              }
              helperText={
                formik.touched.passwordConfirmation &&
                formik.errors.passwordConfirmation
              }
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
