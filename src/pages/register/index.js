import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Header, ProfileCard } from "../../components";
import { StudentForm } from "./studentForm";
import { TeacherForm } from "./teacherForm";

export function Register() {
  const [radioValue, setRadioValue] = useState("student");

  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };

  return (
    <>
      <Header title="CADASTRO" />

      <Grid container sx={{ marginTop: "96px" }}>
        <Grid item xs={1} />

        <Grid item xs={10} sx={{ display: "flex", justifyContent: "center" }}>
          {radioValue === "teacher" ? (
            <TeacherForm radioValue={radioValue} handleChange={handleChange} />
          ) : (
            <StudentForm radioValue={radioValue} handleChange={handleChange} />
          )}

          {/* // <TeacherForm radioValue={radioValue} handleChange={handleChange} /> */}
        </Grid>

        <Grid item xs={1} />
      </Grid>
    </>
  );
}
