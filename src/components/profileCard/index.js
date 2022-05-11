import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import PerfilImage from "../../images/perfil-image.png";
import { TextField } from "./style";
import {
  Box,
  Button,
  Card,
  CardMedia,
  FormControlLabel,
  Grid,
  Input,
  Paper,
  // TextField,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

export function ProfileCard ({ register, userData, onClose }) {
  const [radioValue, setRadioValue] = useState("student");
  const [refFileInput, setRefFileInput] = useState(null);
  const [refCardMedia, setRefCardMedia] = useState(null);

  useEffect(() => {
    setRefFileInput(document.getElementById("fileInput"));
    setRefCardMedia(document.getElementById("cardMedia"));
  }, [setRefFileInput, setRefCardMedia]);

  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };

  const formik = useFormik({
    initialValues: {
      type: "student",
      image: "",
      fullName: register ? "" : "Paula",
      course: register ? "" : "BCC",
      collegePeriod: register ? "" : 6,
      ra: register ? "" : "4568703",
      shift: register ? "" : "integral (T/N)",
      city: register ? "" : "Campo Mourão",
      cellphone: register ? "" : "(00) 00000-0000",
      email: register ? "" : "paula123@gmail.com",
      description: register ? "" : "",
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  const handleClick = (event) => {
    refFileInput.click();

    refFileInput.addEventListener("change", (event) => {
      const reader = new FileReader();

      reader.onload = () => {
        refCardMedia.src = reader.result;
      }

      reader.readAsDataURL(refFileInput.files[0]);
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
            sx={{ maxWidth: "180px", marginTop: "30%", cursor: "pointer", pointerEvents: register ? "auto" : "none" }}
            onClick={handleClick}
          >
            <CardMedia component="img" image={PerfilImage} id="cardMedia" />
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

            {register && 
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
            }
            
            <TextField
              disabled={register ? false : true}
              name="fullName"
              size="small"
              label="NOME COMPLETO"
              value={formik?.values.fullName}
              onChange={formik?.handleChange}
              sx={{ width: "calc(100% - 16px)", margin: "8px" }}
            />

            <Grid container item>
              <TextField
                disabled={register ? false : true}
                name="course"
                size="small"
                label="CURSO"
                value={formik?.values.course}
                onChange={formik?.handleChange}
                sx={{ width: radioValue === "student" ? "55%" : "100%", margin: "8px" }}
              />

              {radioValue === "student" && 
                <TextField
                  disabled={register ? false : true}
                  name="collegePeriod"
                  size="small"
                  label="PERÍODO"
                  value={formik?.values.collegePeriod}
                  onChange={formik?.handleChange}
                  sx={{ width: "calc(45% - 32px)", margin: "8px" }}
                />
              }
            </Grid>

            <Grid container item>
              <TextField
                disabled={register ? false : true}
                name="ra"
                size="small"
                label={radioValue === "student" ? "RA" : "ID" }
                value={formik?.values.ra}
                onChange={formik?.handleChange}
                sx={{ width: "45%", margin: "8px" }}
              />

              <TextField
                disabled={register ? false : true}
                name="shift"
                size="small"
                label="TURNO"
                value={formik?.values.shift}
                onChange={formik?.handleChange}
                sx={{ width: "calc(55% - 32px)", margin: "8px" }}
              />
            </Grid>

            <Grid container item>
              <TextField
                name="city"
                size="small"
                label="CIDADE"
                value={formik?.values.city}
                onChange={formik?.handleChange}
                sx={{ width: "45%", margin: "8px" }}
              />

              <TextField
                name="cellphone"
                size="small"
                label="CELULAR"
                value={formik?.values.cellphone}
                onChange={formik?.handleChange}
                sx={{ width: "calc(55% - 32px)", margin: "8px" }}
              />
            </Grid>

            <TextField
              name="email"
              size="small"
              label="E-MAIL"
              value={formik?.values.email}
              onChange={formik?.handleChange}
              sx={{ width: "calc(100% - 16px)", margin: "8px" }}
            />

            <TextField
              name="description"
              size="small"
              multiline
              minRows={3}
              label="DESCRIÇÃO"
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

                <Button
                  color="error"
                  variant="contained"
                  onClick={onClose}
                >
                  Cancelar
                </Button>
              {/* </Box> */}
            </Box>
          </form>
        </Grid>
      </Grid>

    </Paper>
  );
  };
