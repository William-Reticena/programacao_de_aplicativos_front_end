import React, { useState } from "react";
import { useFormik } from "formik";
import { ModalTeacher } from "../";
import PerfilImage from "../../images/perfil-image.png"
import {
Box,
Button,
Card,
CardMedia,
Grid,
Paper,
TextField,
Typography,
} from "@mui/material";

export function InformationsCardProjects () {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: {
      vaga: "",
      descricao: "",
      cargaSemanal: "",
      periodo: "",
      valor: "",
      requisitos: "",
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <Paper elevation={5} sx={{ padding: "16px", marginBottom: "24px", marginTop: "16px" }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Card elevation={0}>
            <CardMedia component="img" image={PerfilImage} sx={{ maxHeight: "216px" }} />
          </Card>
        </Grid>

        <Grid item xs={10}>
          <Box sx={{ marginBottom: "16px" }}>
            <Typography variant="h2" sx={{ fontSize: "24px" }}>
              {formik.values.vaga}
            </Typography>
          </Box>

            <TextField
              disabled
              multiline
              minRows={3}
              label="Descrição"
              value={formik.values.descricao}
              onChange={formik.handleChange}
              sx={{ width: "100%" }}
            />

          <Box sx={{ display: "flex", marginTop: "16px", justifyContent: "space-between" }}>
            <TextField
              disabled
              size="small"
              label="Carga Horária Semanal"
              value={formik.values.cargaSemanal}
              onChange={formik.handleChange}
              sx={{ width: "31%" }}
            />

            <TextField
              disabled
              size="small"
              label="Período"
              value={formik.values.periodo}
              onChange={formik.handleChange}
              sx={{ width: "31%" }}
            />

            <TextField
              disabled
              size="small"
              label="Valor da Bolsa"
              value={formik.values.valor}
              onChange={formik.handleChange}
              sx={{ width: "31%" }}
            />

          </Box>
        </Grid>
      </Grid>
        <Box sx={{ display: "flex", marginTop: "16px", justifyContent: "space-between" }}>
          <TextField
                disabled
                size="small"
                multiline
                minRows={3}
                label="Requisitos"
                value={formik.values.requisitos}
                onChange={formik.handleChange}
                sx={{ width: "100%" }}
              />
          </Box>
    
          <Box sx={{ display: "flex", marginTop: "16px", justifyContent: "end" }}>
            <Button
              variant="contained"
              onClick={handleOpen}
              sx={{ width: "25%"}}
            >
              Editar vaga
            </Button>

            <ModalTeacher
              open={open}
              onClose={handleClose}
            />

          </Box>
    </Paper>
  );
};