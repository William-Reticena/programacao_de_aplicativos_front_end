import React, { useState } from "react";
import { RadioGroup, Radio } from "@mui/material";
import { FormControl, FormControlLabel, Paper, Typography } from "./style";

export function Filter() {
  const [, setRadioValue] = useState("all");

  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };

  return (
    <Paper elevation={5}>
      <Typography component="span">Filtros</Typography>

      <form>
        <FormControl>
          <RadioGroup onChange={handleChange}>
            <FormControlLabel
              control={<Radio name="all" />}
              value="all"
              label="Todos"
            />

            <FormControlLabel
              control={<Radio name="paid" />}
              value="paid"
              label="Remunerados"
            />

            <FormControlLabel
              control={<Radio name="unpaid" />}
              value="unpaid"
              label="Não Remunerados"
            />
          </RadioGroup>
        </FormControl>
      </form>
    </Paper>
  );
}
