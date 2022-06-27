import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { TextField } from "./style";
import { Button, Paper, Typography, Box } from "@mui/material";
import api from "../../services/api";
import { ADMIN } from "../../routes/routes";


export function ModalAdmin({ data, onClose, open }) {

  const navigate = useNavigate();

  const scheme = Yup.object().shape({

    email: Yup.string()
      .email("Insira um email válido!")
      .required("Insira o seu e-mail!"),
    password: Yup.string().required(' Insira uma senha')
      .min(6, "A senha deve ter pelo menos 6 caracteres"),
  });

  const formik = useFormik({
    validationSchema: scheme,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      api.post("/CandidateStore", {
        status_candidate: 1,
        student_candidate: userId,
        project_candidate: data.id,
      });

      navigate(ADMIN);

    },
  });

  return (
    <Paper>
      <Box>
      <Typography sx={{ textAlign: "center", marginBottom: "16px" }}>Admin</Typography>

      <TextField
        label="E-mail"
        name="email"
        value={formik.values.ra}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <TextField
        label="Senha"
        name="password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />

        <Button type="submit" size="large" variant="contained">
          Login
        </Button>
      </Box>
    </Paper>
  );
}
