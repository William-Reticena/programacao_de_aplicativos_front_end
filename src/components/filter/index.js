import React, { useState } from "react";
import { RadioGroup, Radio } from "@mui/material";
import { FormControl, FormControlLabel, Paper, Typography } from "./style";
import { useFilter } from "../../context/filterContext";

export function Filter() {
  const [, setFilter] = useFilter()
  // const [, setRadioValue] = useState("all");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Paper elevation={5}>
      <Typography component="span">Filtros</Typography>

      <form>
        <FormControl>
          <RadioGroup onChange={handleChange}>
            <FormControlLabel
              control={<Radio name="2" />}
              value="2"
              label="Todos"
            />

            <FormControlLabel
              control={<Radio name="1" />}
              value="1"
              label="Remunerados"
            />

            <FormControlLabel
              control={<Radio name="0" />}
              value="0"
              label="Não Remunerados"
            />
          </RadioGroup>
        </FormControl>
      </form>
    </Paper>
  );
}
