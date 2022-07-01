import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import api from "../../services/api";
import { ModalTeacher } from "../";
import { TextField } from "./style";

export function InformationsCardProjects() {
  const { id } = useParams();
  const [projectCard, setProjectCard] = useState({});
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.post("/ProjectShow", { id });
      setProjectCard(data);
    };
    fetch();
  }, [setProjectCard, id]);

  return (
    <Paper
      elevation={5}
      sx={{ padding: "16px", marginBottom: "24px", marginTop: "16px" }}
    >
      <Grid>
        <Box sx={{ marginBottom: "16px" }}>
          <Typography variant="h2" sx={{ fontSize: "24px" }}>
            {projectCard.name_project}
          </Typography>
        </Box>

        <TextField
          disabled
          multiline
          minRows={3}
          label="Descrição"
          value={projectCard.description_project}
          onChange={null}
          sx={{ width: "100%" }}
        />

        <Box
          sx={{
            display: "flex",
            marginTop: "16px",
            justifyContent: "space-between",
          }}
        >
          <TextField
            disabled
            size="small"
            label="Carga Horária Semanal"
            value={projectCard.schedules_project}
            onChange={null}
            sx={{ width: "31%" }}
          />

          <TextField
            disabled
            size="small"
            label="Período"
            value={projectCard.ideal_period_project}
            onChange={null}
            sx={{ width: "31%" }}
          />

          <TextField
            disabled
            size="small"
            label="Valor da Bolsa"
            value={projectCard.remuneration_value_project}
            onChange={null}
            sx={{ width: "31%" }}
          />
        </Box>
      </Grid>
      <Box
        sx={{
          display: "flex",
          marginTop: "16px",
          justifyContent: "space-between",
        }}
      >
        <TextField
          disabled
          size="small"
          multiline
          minRows={3}
          label="Requisitos"
          value={projectCard.requirements_project}
          onChange={null}
          sx={{ width: "100%" }}
        />
      </Box>

      <Box sx={{ display: "flex", marginTop: "16px", justifyContent: "end" }}>
        <ModalTeacher open={open} onClose={handleClose} infos={projectCard} />
      </Box>
    </Paper>
  );
}
