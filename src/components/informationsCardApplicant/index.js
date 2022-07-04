import React from "react";
import { Box, Card, CardMedia, Grid, Paper, Typography } from "@mui/material";
import { TextField } from "./style";

export function InformationsCardApplicant({ studentInfo }) {
  return (
    <Paper
      elevation={5}
      sx={{ padding: "16px", marginBottom: "24px", marginTop: "16px" }}
    >
      <Grid container spacing={3}>
        <Grid
          item
          xs={2}
          sx={{ display: "flex", alignItems: "center", marginTop: "40px" }}
        >
          <Card elevation={0}>
            <CardMedia
              component="img"
              image={studentInfo.candidate[0].img?.url}
              sx={{ maxHeight: "150px" }}
            />
          </Card>
        </Grid>

        <Grid item xs={8}>
          <Box sx={{ marginBottom: "16px" }}>
            <Typography variant="h2" sx={{ fontSize: "24px" }}>
              {studentInfo.candidate[0].username_student}
            </Typography>
          </Box>

          <TextField
            disabled
            multiline
            minRows={3}
            label="Descrição"
            defaultValue={studentInfo.candidate[0].description_student}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{
              display: "flex",
              marginTop: "47px",
              justifyContent: "space-between",
            }}
          >
            <TextField
              disabled
              size="small"
              label="Período"
              defaultValue={studentInfo.candidate[0].period_student}
              sx={{ width: "100%" }}
            />
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
              size="small"
              label="Curso"
              defaultValue={studentInfo.candidate[0].course_student}
              sx={{ width: "100%" }}
            />
          </Box>
        </Grid>
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
          label="E-mail"
          defaultValue={studentInfo.candidate[0].email_student}
          sx={{ width: "40%" }}
        />
        <TextField
          disabled
          size="small"
          label="Celular"
          defaultValue={studentInfo.candidate[0].contact_student}
          sx={{ width: "28%" }}
        />

        <TextField
          disabled
          size="small"
          label="Turno"
          defaultValue={studentInfo.candidate[0].turno_student}
          sx={{ width: "28%" }}
        />
      </Box>
    </Paper>
  );
}
