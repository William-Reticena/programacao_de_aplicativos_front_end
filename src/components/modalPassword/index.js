import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { 
  Box, 
  Button, 
  Grid, 
  Modal, 
  Paper, 
  Typography, } from "@mui/material";
import api from "../../services/api";
import { TextField } from "./style";

export function ModalPassword({ userData,onClose, open }) {
  const [isDisabled, setIsDisabled] = useState(false);

  const scheme = Yup.object().shape({
    password: Yup.string().notRequired(' Insira uma nova senha')
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
    passwordConfirmation: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Senhas inválidas'),    
  });

  const formik = useFormik({
    validationSchema: scheme,
    initialValues: {
      password: "",
      passwordConfirmation: "",
    },
    onSubmit: async (values) => {
      // console.log("value", values.id);
      setIsDisabled(true);

      try {
        await api.post("/StudentUpdate", {
          password_student: values.passwordConfirmation,
        });

        alert("Senha atualizada com sucesso!");

        document.location.reload();
      } catch (error) {
        console.log("teste", error);
      }
      // onSubmit: (values) => {
      //   alert(JSON.stringify(values, null, 2));
      // },
    },
  });

  return (
      <Paper
        sx={{
          width: "80%",
          padding: "16px",
          justifyContent: 'center',
        }}
      >
        <Typography variant="h1" sx={{ textAlign: "center", fontSize: "2em", marginBottom: "16px" }}>
          Editar Senha
        </Typography>

        <Grid>
        <TextField
              name="password"
              type="password"
              size="small"
              label="Nova senha"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              sx={{ width: "45%", margin: "8px" }}
            />

            <TextField
              name="passwordConfirmation"
              type="password"
              size="small"
              label="Confirmar senha"
              value={formik.values.passwordConfirmation}
              onChange={formik.handleChange}
              error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
              helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
              sx={{ width: "calc(55% - 32px)", margin: "8px" }}
            />
        </Grid>
        <Grid>
          <Box
              sx={{
              width: "100%",
              display: "inline-flex",
              justifyContent: "center",
            }}
          >
          <Button
                  disabled={isDisabled}
                  type="submit"
                  variant="contained"
                  sx={{ marginRight: "16px" }}
                >
                  Concluir
                </Button>

                <Button color="error" variant="contained" onClick={onClose}>
                  Cancelar
                </Button>
          </Box>
        </Grid>
      </Paper>
  );
}
