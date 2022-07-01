import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
Typography,
} from "@mui/material";
import api from "../../services/api";


export function InformationsCardApplicant () {
  const { id } = useParams();
  const [candidateCard, setcandidateCard] = useState({});

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.post("/CandidateShow", { id });
      setcandidateCard(data);
    };
    fetch();
  }, [setcandidateCard, id],);


  const formik = useFormik({
    initialValues: {
      nome: "",
      descricao: "",
      periodo: "",
      curso: "",
      email: "",
      celular: "",
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  })
  return (
    <Paper elevation={5} sx={{ padding: "16px", marginBottom: "24px" }}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Card elevation={0}>
            <CardMedia component="img" image={PerfilImage} sx={{ maxHeight: "150px" }} />
          </Card>
        </Grid>

        <Grid item xs={8}>
          <Box sx={{ marginBottom: "16px" }}>
            <Typography variant="h2" sx={{ fontSize: "24px" }}>
              {candidateCard.student_candidate}
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
        </Grid>
        <Grid item xs={2}>
          <Box sx={{ display: "flex", marginTop: "47px", justifyContent: "space-between" }}>
            <TextField
              disabled
              size="small"
              label="Período"
              value={formik.values.periodo}
              onChange={formik.handleChange}
              sx={{ width: "100%" }}
            />
          </Box>
          <Box sx={{ display: "flex", marginTop: "16px", justifyContent: "space-between" }}>
            <TextField
              disabled
              size="small"
              label="Curso"
              value={formik.values.curso}
              onChange={formik.handleChange}
              sx={{ width: "100%" }}
            />
          </Box>
        </Grid>
      </Grid>
        <Box sx={{ display: "flex", marginTop: "16px", justifyContent: "space-between" }}>
            <TextField
              disabled
              size="small"
              label="E-mail"
              value={formik.values.email}
              onChange={formik.handleChange}
              sx={{ width: "45%" }}
            />
            <TextField
              disabled
              size="small"
              label="Celular"
              value={formik.values.celular}
              onChange={formik.handleChange}
              sx={{ width: "30%" }}
            />
            <Button
                variant="contained"
                onClick={handleOpen}
                sx={{ width: "20%" }}
              >
                ACEITAR CANDIDATO
              </Button>
        </Box>
    </Paper>
  );
};