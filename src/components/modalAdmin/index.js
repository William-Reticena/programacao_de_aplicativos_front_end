import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { TextField } from "./style";
import { Button, Paper, Typography, Box, Container } from "@mui/material";
import { useUserInfo } from "../../context/userContext";
import api from "../../services/api";
import { ADMIN } from "../../routes/routes";
import { useNavigate } from "react-router-dom";


export function ModalAdmin({ onClose }) {
  const [userData, setUserdata] = useUserInfo();
  const navigate = useNavigate();

  const scheme = Yup.object().shape({
    username: Yup.string().required("Insira o seu username!"),
    password: Yup.string().required(' Insira uma senha'), 
  });

  const formik = useFormik({
    validationSchema: scheme,
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      const { data } = await api.post("/Admin/login", {
          username: values.username,
          password: values.password,
      });
      console.log(data);
      if(data.username === "test"){
        setUserdata((prevState) => ({
          ...prevState,
          type: "admin",
        }));
        if(userData.type === "admin"){
          navigate(ADMIN);
        }
      }
    },
  });

  return (

    <Container 
      sx={{
      justifyContent: 'center',
      alignItems: 'center',
      display: "center",marginTop: "30px"}}>
    <Paper
    sx={{ }}
    >
      <Box>
      <Typography sx={{ textAlign: "center", marginBottom: "16px", marginTop: "16px" }}>ADMIN</Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
      <Box sx={{ marginLeft: "20px", marginBottom: "16px", marginRight: "20px"}}>
      <TextField
        label="Username"
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
        />
      </Box>
      <Box sx={{ marginLeft: "20px", marginBottom: "16px", marginRight: "20px"}}>
      <TextField
        label="Senha"
        name="password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      </Box>

      <Box sx={{  marginLeft: "85px", marginBottom: "16px"}}>
        <Button type="submit" size="large" variant="contained">
          Login
        </Button>
      </Box>
    </form>
    </Paper>
    </Container>
  );
}
