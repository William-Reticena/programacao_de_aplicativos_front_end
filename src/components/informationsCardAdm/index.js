import React, { useState } from "react";
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
Typography,
// TextField,
} from "@mui/material";

export function InformationsCardAdm () {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: {
      nome: "",
      id: "",
      curso: "",
      email: "",
      celular: "",
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <Paper elevation={5} sx={{ padding: "16px", marginBottom: "24px" }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Card elevation={0}>
            <CardMedia component="img" image={PerfilImage} sx={{ maxHeight: "216px" }} />
          </Card>
        </Grid>

        <Grid item xs={10}>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ marginBottom: "16px" }}>
              <Typography variant="h2" sx={{ fontSize: "24px" }}>
                {formik.values.nome}
              </Typography>
            </Box >
            
            <Box sx={{ display: "flex", marginTop: "16px", justifyContent: "space-between" }}>
              <TextField
                disabled
                size="small"
                label="ID"
                value={formik.values.id}
                onChange={formik.handleChange}
                sx={{ width: "22%" }}
              />

              <TextField
                disabled
                size="small"
                label="CURSO"
                value={formik.values.curso}
                onChange={formik.handleChange}
                sx={{ width: "75%" }}
              />
            </Box>

            <Box sx={{ display: "flex", marginTop: "16px", justifyContent: "space-between" }}>
              <TextField
                disabled
                size="small"
                label="E-MAIL"
                value={formik.values.email}
                onChange={formik.handleChange}
                sx={{ width: "100%" }}
              />
            </Box>

            <Box sx={{ display: "flex", marginTop: "16px", justifyContent: "space-between" }}>
              <TextField
                disabled
                size="small"
                label="CELULAR"
                value={formik.values.celular}
                onChange={formik.handleChange}
                sx={{ width: "40%" }}
              />

              <Button
                variant="contained"
                onClick={handleOpen}
                sx={{ width: "25%" }}
              >
                Aprovar
              </Button>

              <Button
                variant="contained"
                onClick={handleOpen}
                sx={{ width: "25%" }}
                color="error"
              >
                Excluir
              </Button>

            </Box>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
};
