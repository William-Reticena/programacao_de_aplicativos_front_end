import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  Paper,
  RadioGroup,
  Span,
  TextField,
} from "./style";
import {
  CardMedia,
  FormControlLabel,
  Radio,
  IconButton,
  Modal,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUserInfo } from "../../context/userContext";
import Logo from "../../images/Logo-UTFPR.png";
import { NavigationButton, ModalAdmin } from "../../components";
import { ChalkboardUser, GraduationCap } from "../../icons";
import { REGISTER, STUDENT_HOME, TEACHER_HOME } from "../../routes/routes";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import api from "../../services/api";

const LabelWrapper = ({ isSelected, user }) => (
  <Container
    sx={{
      background: isSelected ? "#90caf9" : "inherit",
    }}
  >
    {user === "Aluno" ? (
      <GraduationCap size="100px" />
    ) : (
      <ChalkboardUser size="100px" />
    )}
    <Span>{user}</Span>
  </Container>
);

export function SignIn() {
  const [selectedValue, setSelectedValue] = useState("student");
  const [radioStudent, setRadioStudent] = useState(true);
  const [radioTeacher, setRadioTeacher] = useState(false);
  const [, setUserdata] = useUserInfo();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const scheme = Yup.object().shape({
    email: Yup.string()
      .email("Insira um email válido!")
      .required("Insira o seu e-mail!"),
    password: Yup.string()
      .required(" Insira uma senha")
      .min(6, "A senha deve ter pelo menos 6 caracteres"),
  });

  const formik = useFormik({
    validationSchema: scheme,
    initialValues: {
      type: "student",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const fetch = async () => {
        try {
          if (values.type === "student") {
            const { data } = await api.post("/Student/login", {
              email: values.email,
              password: values.password,
            });
            const { id, token } = data;

            if (id) {
              setUserdata((prevState) => ({
                ...prevState,
                id,
                type: values.type,
              }));
              localStorage.setItem("token", token);
              localStorage.setItem("type", values.type);
              localStorage.setItem("id", id);
              navigate(STUDENT_HOME);
            }
          } else if (values.type === "teacher") {
            const { data } = await api.post("/Professor/login", {
              email: values.email,
              password: values.password,
            });
            const { id, token } = data;

            if (id) {
              setUserdata((prevState) => ({
                ...prevState,
                id,
                type: values.type,
              }));
              localStorage.setItem("token", token);
              localStorage.setItem("type", values.type);
              localStorage.setItem("id", id);
              navigate(TEACHER_HOME);
            }
          }
        } catch (error) {
          alert("E-mail ou senha incorreta!!");
        }
      };
      fetch();
    },
  });

  const handleChange = (event) => {
    setSelectedValue(event.target.value);

    setRadioStudent((prevState) => !prevState);
    setRadioTeacher((prevState) => !prevState);
  };

  return (
    <Container
      sx={{
        height: "100vh",
      }}
    >
      <Box>
        <IconButton onClick={handleOpen}>
          <SupervisedUserCircleIcon />
        </IconButton>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ justifyContent: "center" }}
      >
        <>
          <ModalAdmin onClose={handleClose} />
        </>
      </Modal>
      <Paper elevation={5}>
        <Box>
          <Card elevation={0}>
            <CardMedia component="img" image={Logo} />
          </Card>
        </Box>
        
        <Box
          sx={{
            padding: "0 0 24px 0",
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <FormControl>
              <RadioGroup onChange={formik.handleChange}>
                <FormControlLabel
                  control={
                    <Radio
                      name="type"
                      checked={selectedValue === "student"}
                      onChange={handleChange}
                      value="student"
                      sx={{ display: "none" }}
                    />
                  }
                  label={
                    <LabelWrapper user="Aluno" isSelected={radioStudent} />
                  }
                />

                <FormControlLabel
                  control={
                    <Radio
                      name="type"
                      checked={selectedValue === "teacher"}
                      onChange={handleChange}
                      value="teacher"
                      sx={{ display: "none" }}
                    />
                  }
                  label={
                    <LabelWrapper user="Professor" isSelected={radioTeacher} />
                  }
                />
              </RadioGroup>

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
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />

              <Button type="submit" size="large" variant="contained">
                Login
              </Button>

              <NavigationButton to={REGISTER}>
                <Button size="large">Cadastre-se</Button>
              </NavigationButton>
            </FormControl>
          </form>
        </Box>
      </Paper>
    </Container>
  );
}
