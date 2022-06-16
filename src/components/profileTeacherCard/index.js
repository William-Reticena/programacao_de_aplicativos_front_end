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
  Grid,
  Input,
  Paper,
  Typography,
} from "@mui/material";

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
  });

  // console.log(userData);

  const formik = useFormik({
    validationSchema: scheme,
    initialValues: {
      id: userData.id,
      type: userData.type,
      image: "", // não tem
      imageURL: "", // não tem
      fullName: userData.username_professor, //ok
      course: userData.course_professor, //ok
      collegePeriod: "", //não tem
      // id: "não tem",
      shift: "",
      city: userData.city_professor,
      cellphone: userData.contact_professor,
      email: userData.email_professor,
      description: userData.description_professor,
    },
    onSubmit: async (values) => {
      setIsDisabled(true);
      try {
        await api.post("/ProfessorUpdate", {
          id: values.id,
          username_professor: values?.fullName,
          password_professor: values?.password,
          course_professor: values?.course,
          email_professor: values?.email,
          contact_professor: values?.cellphone,
          city_professor: values?.city,
          description_professor: values?.description,
          status_professor: 0,
        });
        // onClose();
        document.location.reload();
      } catch (error) {
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

    // console.log(refFileInput);
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
                sx={{ width: "100%", margin: "8px" }}
              />
            </Grid>

            <Grid container item>
              <TextField
                disabled
                name="id"
                size="small"
                label="ID"
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
              name="Senha"
              size="small"
              label="Nova senha"
              sx={{ width: "45%", margin: "8px" }}
            />

            <TextField
              name="Senha"
              size="small"
              label="Confirmar senha"
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

              {/* {register && (
                <NavigationButton to={LOGIN}>
                  <Button color="error" variant="contained">
                    Cancelar
                  </Button>
                </NavigationButton>
              )} */}

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
