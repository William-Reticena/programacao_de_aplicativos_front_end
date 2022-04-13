import React from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Paper,
  Typography,
} from "@mui/material";

export function Filter () {
  return (
    <Paper
    elevation={5}
    sx={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "24px", padding: "8px", position: "fixed", width: "12.5%" }}
  >
    <Typography
      component="span"
      sx={{ background: "#E3F2FD", diplay: "inline-flex", width: "100%", textAlign: "center", color: "#305FAC", borderRadius: "4px", marginBottom: "16px", height: "40px", lineHeight: "40px"}}
    >
      Filtros
    </Typography>
    <FormControl sx={{ marginLeft: "8px" }}>
      <FormGroup>
        <FormControlLabel
          sx={{ margin: "5px 0px" }}
          control={<Checkbox name="all" />}
          label="Todos"
        />

        <FormControlLabel
          sx={{ margin: "5px 0px" }}
          control={<Checkbox name="paid" />}
          label="Remunerados"
        />

        <FormControlLabel
          sx={{ margin: "5px 0px" }}
          control={<Checkbox name="unpaid" />}
          label="Não Remunerados"
        />

        <FormControlLabel
          sx={{ margin: "5px 0px" }}
          control={<Checkbox name="others" />}
          label="Outros Cursos"
        />
      </FormGroup>
    </FormControl>
  </Paper>
  );
};
