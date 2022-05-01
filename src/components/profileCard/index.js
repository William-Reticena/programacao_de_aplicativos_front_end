import React from "react";
import { useFormik } from "formik";
import PerfilImage from "../../images/perfil-image.png"
import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Paper,
  TextField,
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
          <Card elevation={0} sx={{ maxWidth: "180px" }}>
            <CardMedia component="img" image={PerfilImage} />
          </Card>
        </Grid>

        <Grid item xs={10}>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              name={formik.values.fullName}
              size="small"
              label="NOME COMPLETO"
              sx={{ width: "calc(100% - 16px)", margin: "8px" }}
            />

            <Grid container item>
              <TextField
                size="small"
                label="CURSO"
                sx={{ width: "55%", margin: "8px" }}
              />

              <TextField
                size="small"
                label="PERÍODO"
                sx={{ width: "calc(45% - 32px)", margin: "8px" }}
              />
            </Grid>

            <Grid container item>
              <TextField
                size="small"
                label="RA"
                sx={{ width: "45%", margin: "8px" }}
              />

              <TextField
                size="small"
                label="TURNO"
                sx={{ width: "calc(55% - 32px)", margin: "8px" }}
              />
            </Grid>

            <Grid container item>
              <TextField
                size="small"
                label="CIDADE"
                sx={{ width: "45%", margin: "8px" }}
              />

              <TextField
                size="small"
                label="CELULAR"
                sx={{ width: "calc(55% - 32px)", margin: "8px" }}
              />
            </Grid>

            <TextField
              size="small"
              label="E-MAIL"
              sx={{ width: "calc(100% - 16px)", margin: "8px" }}
            />
          </form>
        </Grid>
      </Grid>

      <TextField
        size="small"
        multiline
        minRows={3}
        label="DESCRIÇÃO"
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
    </Paper>
  );
};
