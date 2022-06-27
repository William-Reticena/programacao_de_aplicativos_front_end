import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardMedia,
  FormControlLabel,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { TextField } from "./style";
import api from "../../services/api";
import PerfilImage from "../../images/perfil-image.png";
import { LOGIN } from "../../routes/routes";

export function TeacherForm({ handleChange, radioValue }) {
  const navigate = useNavigate();
  const [refFileInput, setRefFileInput] = useState(null);
  const [refCardMedia, setRefCardMedia] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setRefFileInput(document.getElementById("fileInput"));
    setRefCardMedia(document.getElementById("cardMedia"));
  }, [setRefFileInput, setRefCardMedia]);

  const scheme = Yup.object().shape({
    fullName: Yup.string().required("Insira seu nome completo!"),
    course: Yup.string().required("Insira seu curso de graduação!"),
    id: Yup.number()
      .required("Insira seu ID!")
      .positive("Deve ser um número positivo!")
      .integer("Deve ser um número inteiro!"),
    shift: Yup.string().required("Insira em qual turno você se encontra!"),
    city: Yup.string().required("Insira o nome da sua cidade!"),
    cellphone: Yup.string().required("Insira seu número de celular!"),
    email: Yup.string()
      .email("Insira um email válido!")
      .required("Insira o seu e-mail!"),
    password: Yup.string()
      .required("Insira uma senha!")
      .min(6, "A senha deve ter pelo menos 6 caracteres"),
  });

  const formik = useFormik({
    validationSchema: scheme,
    initialValues: {
      type: "teacher", //não tem
      image: "", // não tem
      imageURL: "", // não tem
      fullName: "", //ok
      course: "", //ok
      id: "", // ok
      shift: "", // ok
      city: "", //ok
      cellphone: "", //ok
      email: "", //ok
      password: "", //ok
      description: "", //ok
    },
    onSubmit: async (values) => {
      setIsDisabled(true);

      const {
        type, //não tem
        image, // não tem
        imageURL, // não tem
        fullName, //ok
        course, //ok
        id, // não tem
        shift, //não tem
        city, //ok
        cellphone, //ok
        email, //ok
        password, //ok
        description, //ok
      } = values;

      const file = new FormData();

      file.append("file", imageURL);
      file.append("username_professor", fullName);
      file.append("password_professor", password);
      file.append("course_professor", course);
      file.append("id_professor", id);
      file.append("turno_professor", shift);
      file.append("email_professor", email);
      file.append("contact_professor", cellphone);
      file.append("city_professor", city);
      file.append("description_professor", description);
      file.append("status_professor", 1);

      // for (const value of file.values()) {
      //   console.log(value);
      // }

      try {
        await api.post("/ProfessorStore", {
          username_professor: values.fullName,
          password_professor: values.password,
          id_professor: values.id,
          course_professor: values.course,
          turno_professor: values.shift,
          email_professor: values.email,
          contact_professor: values.cellphone,
          city_professor: values.city,
          description_professor: values?.description,
          status_professor: 1,
        });

        navigate(LOGIN);
      } catch (error) {
        console.log("teste", error);
      }
    },
    // onSubmit: async (values) => {
    //   alert(JSON.stringify(values, null, 2));
    // }
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
              marginTop: "60%",
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

            <TextField
              name="fullName"
              size="small"
              label="Nome completo"
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
              value={formik?.values.fullName}
              onChange={formik?.handleChange}
              sx={{ width: "calc(100% - 16px)", margin: "8px" }}
            />

            <Grid container item>
              <TextField
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
                name="id"
                size="small"
                label="ID"
                error={formik.touched.id && Boolean(formik.errors.id)}
                helperText={formik.touched.id && formik.errors.id}
                value={formik?.values.id}
                onChange={formik?.handleChange}
                sx={{ width: "45%", margin: "8px" }}
              />

              <FormControl sx={{ width: "50%", margin: "8px" }} size="small">
                <InputLabel id="select-shift">Turno</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  label="Turno"
                  id="select-shift"
                  name="shift"
                  value={formik.values.shift}
                  onChange={formik.handleChange}
                >
                  <MenuItem value={"Integral M/T"}>Integral M/T</MenuItem>
                  <MenuItem value={"Integral T/N"}>Integral T/N</MenuItem>
                  <MenuItem value={"Noite"}>Noite</MenuItem>
                </Select>
              </FormControl>
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
              type="password"
              name="password"
              size="small"
              label="Senha"
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              value={formik?.values.password}
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
                sx={{ marginRight: "16px" }}
              >
                Concluir
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
}
