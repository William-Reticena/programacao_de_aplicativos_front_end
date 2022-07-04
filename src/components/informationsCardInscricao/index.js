import React, { useState } from "react";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { ModalProject } from "../modalProject";
import api from "../../services/api";

export function InformationsCardInscricao({ data }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log("data incr", data);
  const handleDelete = async () => {
    try {
      await api.post("/CandidateDestroy", { id: data.id });
      document.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Paper elevation={5} sx={{ padding: "16px", marginBottom: "24px" }}>
      <Grid>
        <Box sx={{ marginBottom: "16px" }}>
          <Typography variant="h2" sx={{ fontSize: "24px" }}>
            {data.project[0]?.name_project}
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
            value={data.project[0]?.description_project}
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
          >
            Visualizar Vaga
          </Button>

          <Button
            variant="contained"
            onClick={handleDelete}
            sx={{ width: "25%" }}
            color="error"
          >
            Cancelar Inscrição
          </Button>

          <ModalProject open={open} onClose={handleClose} data={data} />
        </Box>
      </Grid>
    </Paper>
  );
}
