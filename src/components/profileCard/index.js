import React from "react";
import { useFormik } from "formik";
import PerfilImage from "../../images/perfil-image.png";
import { TextField } from "./style";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Paper,
  // TextField,
  Typography
} from "@mui/material";

export function ProfileCard ({ userData, onClose }) {
  const formik = useFormik({
    initialValues: {
      fullName: "Paula",
      course: "BCC",
      collegePeriod: 6,
      ra: "4568703",
      shift: "integral (T/N)",
      city: "Campo Mourão",
      cellphone: "(00) 00000-0000",
      email: "paula123@gmail.com",
      description: "",
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <Paper sx={{ /*display: "flex", flexDirection: "column",*/ width: "80%", padding: "16px" }}>
      <Typography sx={{ textAlign: "center", fontSize: "2em"}}>PERFIL</Typography>

      <Grid container>
        <Grid item xs={2}>
          <Card elevation={0} sx={{ maxWidth: "180px", margin: "25% 0 0 6%" }}>
            <CardMedia component="img" image={PerfilImage} />
          </Card>
        </Grid>

        <Grid item xs={10}>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              disabled
              name="fullName"
              size="small"
              label="NOME COMPLETO"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              sx={{ width: "calc(100% - 16px)", margin: "8px" }}
            />

            <Grid container item>
              <TextField
                disabled
                name="course"
                size="small"
                label="CURSO"
                value={formik.values.course}
                onChange={formik.handleChange}
                sx={{ width: "55%", margin: "8px" }}
              />

              <TextField
                disabled
                name="collegePeriod"
                size="small"
                label="PERÍODO"
                value={formik.values.collegePeriod}
                onChange={formik.handleChange}
                sx={{ width: "calc(45% - 32px)", margin: "8px" }}
              />
            </Grid>

            <Grid container item>
              <TextField
                disabled
                name="ra"
                size="small"
                label="RA"
                value={formik.values.ra}
                onChange={formik.handleChange}
                sx={{ width: "45%", margin: "8px" }}
              />

              <TextField
                disabled
                name="shift"
                size="small"
                label="TURNO"
                value={formik.values.shift}
                onChange={formik.handleChange}
                sx={{ width: "calc(55% - 32px)", margin: "8px" }}
              />
            </Grid>

            <Grid container item>
              <TextField
                name="city"
                size="small"
                label="CIDADE"
                value={formik.values.city}
                onChange={formik.handleChange}
                sx={{ width: "45%", margin: "8px" }}
              />

              <TextField
                name="cellphone"
                size="small"
                label="CELULAR"
                value={formik.values.cellphone}
                onChange={formik.handleChange}
                sx={{ width: "calc(55% - 32px)", margin: "8px" }}
              />
            </Grid>

            <TextField
              name="email"
              size="small"
              label="E-MAIL"
              value={formik.values.email}
              onChange={formik.handleChange}
              sx={{ width: "calc(100% - 16px)", margin: "8px" }}
            />

            <TextField
              name="description"
              size="small"
              multiline
              minRows={3}
              label="DESCRIÇÃO"
              value={formik.values.description}
              onChange={formik.handleChange}
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
