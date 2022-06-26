import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { ModalProject } from "../modalProject";
import api from "../../services/api";

export function InformationsCardInscricao({ data }) {
  const [dataProj, setDataProj] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log("dataid", data);

  useEffect(() => {
    const id = data.project_candidate;
    console.log("id", id);
    const fetch = async () => {
      const { dataProject } = await api.post("/ProjectShow", {
        id,
      });
      // setDataProj(dataProject);
      console.log(dataProject);
    };
    fetch();
  }, [setDataProj, data.project_candidate]);

  const formik = useFormik({
    initialValues: {
      // vaga: dataProj.name_project,
      // descricao: dataProj.description_project,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Paper elevation={5} sx={{ padding: "16px", marginBottom: "24px" }}>
      <Grid>
        <Box sx={{ marginBottom: "16px" }}>
          <Typography variant="h2" sx={{ fontSize: "24px" }}>
            {dataProj.name_project}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            marginTop: "16px",
            justifyContent: "space-between",
          }}
        >
          <TextField
            disabled
            multiline
            minRows={3}
            label="Descricao"
            // value={formik.values.descricao}
            onChange={formik.handleChange}
            sx={{ width: "100%" }}
          />
        </Box>

        <Box
          sx={{ display: "flex", marginTop: "16px", justifyContent: "center" }}
        >
          <Button
            variant="contained"
            onClick={handleOpen}
            sx={{ width: "25%", marginRight: "16px" }}
            color="error"
          >
            Cancelar Inscrição
          </Button>

          <Button
            variant="contained"
            onClick={handleOpen}
            sx={{ width: "25%" }}
          >
            Visualizar Vaga
          </Button>

          <ModalProject open={open} onClose={handleClose} data={data} />
        </Box>
      </Grid>
    </Paper>
  );
}
