import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
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
  // TextField,
  Typography,
} from "@mui/material";
import { TextField } from "./style";
import api from "../../services/api";
import PerfilImage from "../../images/perfil-image.png";

export function TeacherForm({ handleChange, radioValue }) {
  const [refFileInput, setRefFileInput] = useState(null);
  const [refCardMedia, setRefCardMedia] = useState(null);

  useEffect(() => {
    setRefFileInput(document.getElementById("fileInput"));
    setRefCardMedia(document.getElementById("cardMedia"));
  }, [setRefFileInput, setRefCardMedia]);

  const scheme = Yup.object().shape({
    fullName: Yup
      .string()
      .required("Insira seu nome completo!"),
    course: Yup
      .string()
      .required("Insira seu curso de graduação!"),
    id: Yup
      .string()
      .required("Insira seu RA!"),
    shift: Yup
      .string()
      .required("Insira em qual turno você se encontra!"),
    city: Yup
      .string()
      .required("Insira o nome da sua cidade!"),
    cellphone: Yup
      .string()
      .required("Insira seu número de celular!"),
    email: Yup
      .string()
      .email("Insira um email válido!")
      .required("Insira o seu e-mail!"),
    password: Yup
      .string()
      .required("Insira uma senha!"),
  });

  const formik = useFormik({
    validationSchema: scheme,
    initialValues: {
      type: "teacher",
      image: "",
      imageURL: "",
      fullName: "",
      course: "",
      id: "",
      shift: "",
      city: "",
      cellphone: "",
      email: "",
      password: "",
      description: "",
    },
    onSubmit: async (values) => {
      try {
        await api.post("/ProfessorStore", {
          username_professor: values?.fullName,
          password_professor: values?.password,
          course_professor: values?.course,
          email_professor: values?.email,
          contact_professor: values?.cellphone,
          city_professor: values?.city,
          description_professor: values?.description,
          status_professor: "tttt"
        });
      } catch (error) {
        console.log("teste", error);
      }
    }
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
      }

      reader.readAsDataURL(refFileInput.files[0]);

      formik.setFieldValue("imageURL", URL.createObjectURL(refFileInput.files[0]));
    });

    console.log(refFileInput);
  };

  return (
    <Paper sx={{ /*display: "flex", flexDirection: "column",*/ width: "80%", padding: "16px" }}>
      <Typography sx={{ textAlign: "center", fontSize: "2em", marginBottom: "16px"}}>PERFIL</Typography>

      <Grid container>
        <Grid item xs={2}>
          <Card
            elevation={0}
            sx={
              {
                backgroundSize: "contain",
                display: "flex",
                alignItems: "center",
                maxHeight: "200px",
                minHeight: "200px", 
                maxWidth: "180px",
                marginTop: "60%",
                cursor: "pointer",
              }
            }
            onClick={handleClick}
          >
            <CardMedia component="img" image={PerfilImage} id="cardMedia" 
              sx={{backgroundSize: "contain",}}
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

          <TextField
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
            error={formik.touched.cellphone && Boolean(formik.errors.cellphone)}
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

        <Box sx={{ width: "100%", display: "inline-flex", justifyContent: "center" }} >
          {/* <Box sx={{ width: "60%", display: "inline-flex", justifyContent: "right", margin: "8px" }}> */}
            <Button
              type="submit"
              variant="contained"
              sx={{ marginRight: "16px" }}
            >
              Concluir
            </Button>

            {/* {register && <NavigationButton to={LOGIN}>
              <Button
                color="error"
                variant="contained"
              >
                Cancelar
              </Button>
            </NavigationButton>} */}

            {/* {!register && <Button
                color="error"
                variant="contained"
                onClick={onClose}
              >
                Cancelar
              </Button>} */}
          {/* </Box> */}
        </Box>
      </form>
      </Grid>
      </Grid>
    </Paper>
  )
}