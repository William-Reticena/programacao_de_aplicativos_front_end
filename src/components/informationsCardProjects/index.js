import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Grid, Paper, Typography } from "@mui/material";
import api from "../../services/api";
import { ModalTeacher } from "../";
import { TextField } from "./style";

export function InformationsCardProjects({ projectCard }) {
  const { id } = useParams();
  // const [projectCard, setProjectCard] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const {
    description_project,
    schedules_project,
    ideal_period_project,
    remuneration_value_project,
    requirements_project,
  } = projectCard;

  // useEffect(() => {
  //   const fetch = async () => {
  //     const { data } = await api.post("/ProjectShow", { id });
  //     setProjectCard(data);
  //   };
  //   fetch();
  // }, [setProjectCard, id]);
  console.log("projetos", projectCard);

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

        <form>
          <Box
            variant="div"
            sx={{
              border: "1px solid rgba(0, 0, 0, 0.38)",
              position: "relative",
              borderRadius: "4px",
              height: "60px",
              padding: "16px",
              fontFamily: "Roboto",
            }}
          >
            <span
              style={{
                position: "absolute",
                background: "white",
                padding: "0 2px",
                top: "-11px",
                left: "8px",
              }}
            >
              Descrição
            </span>
            {description_project}
          </Box>

          <Box
            sx={{
              display: "flex",
              marginTop: "16px",
              justifyContent: "space-between",
            }}
          >

            <Box
              variant="div"
              sx={{
                border: "1px solid rgba(0, 0, 0, 0.38)",
                position: "relative",
                borderRadius: "4px",
                height: "8px",
                padding: "16px",
                width: "200px",
                fontFamily: "Roboto",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  background: "white",
                  padding: "0 2px",
                  top: "-11px",
                  left: "8px",
                }}
              >
                Carga Horária Semanal
              </span>
              {schedules_project}
            </Box>

            <Box
              variant="div"
              sx={{
                border: "1px solid rgba(0, 0, 0, 0.38)",
                position: "relative",
                borderRadius: "4px",
                height: "8px",
                padding: "16px",
                width: "200px",
                fontFamily: "Roboto",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  background: "white",
                  padding: "0 2px",
                  top: "-11px",
                  left: "8px",
                }}
              >
                Período ideal
              </span>
              {ideal_period_project}
            </Box>

            <Box
              variant="div"
              sx={{
                border: "1px solid rgba(0, 0, 0, 0.38)",
                position: "relative",
                borderRadius: "4px",
                height: "8px",
                padding: "16px",
                width: "200px",
                fontFamily: "Roboto",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  background: "white",
                  padding: "0 2px",
                  top: "-11px",
                  left: "8px",
                }}
              >
                Remuneração
              </span>
              {remuneration_value_project}
            </Box>
          </Box>
        </form>
      </Grid>
      <Box
        sx={{
          marginTop: "16px",
        }}
      >
        <Box
          variant="div"
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.38)",
            position: "relative",
            borderRadius: "4px",
            height: "60px",
            padding: "16px",
            fontFamily: "Roboto",
          }}
        >
          <span
            style={{
              position: "absolute",
              background: "white",
              padding: "0 2px",
              top: "-11px",
              left: "8px",
            }}
          >
            Requisitos
          </span>
          {requirements_project}
        </Box>
      </Box>
    </Paper>
  );
}
