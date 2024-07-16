import React from "react";
import useStyles from "./Styles.IniciarSesion.module";
import { TextField, Button, IconButton } from "@material-ui/core";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const IniciarSesion = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToSignUp = () => {
    navigate("/sign-up");
  };

  const goToResetPassword = () => {
    navigate("/reset-password");
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Ingrese un email válido")
      .required("El email es requerido"),
    password: Yup.string().required("La contraseña es requerida"),
  });

  return (
    <div className={classes.mainContaner}>
      <IconButton>
        <ChevronLeft
          className={classes.backButton}
          onClick={goToHome}
          fontSize="large"
        />
      </IconButton>
      <div className={classes.viewContainer}>
        <div className={classes.widthContainer}>
          <h1 className={`${classes.degraded} ${classes.signInHeader}`}>
            Inicia Sesión
          </h1>
          <h1 className={classes.signInHeader}>con tu cuenta LOREFLiX</h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              // Aquí manejas la lógica para enviar los datos del formulario
              console.log(values);
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              errors,
              touched,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className={classes.formContainer}>
                  <TextField
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    variant="outlined"
                    className={classes.signInInputs}
                    placeholder="ejemplo@email.com"
                    InputProps={{
                      style: { color: "#f2f2f2", border: "1px solid #67696f" },
                    }}
                  />
                  {errors.email && touched.email && (
                    <div className={classes.errorStyle}>{errors.email}</div>
                  )}
                  <br />
                  <TextField
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    variant="outlined"
                    className={classes.signInInputs}
                    placeholder="Contraseña"
                    InputProps={{
                      style: { color: "#f2f2f2", border: "1px solid #67696f" },
                    }}
                  />
                  {errors.password && touched.password && (
                    <div className={classes.errorStyle}>{errors.password}</div>
                  )}
                  <br />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={classes.signInButton}
                  >
                    Iniciar Sesión
                  </Button>
                  <br />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={classes.signUpButton}
                    onClick={goToSignUp}
                  >
                    ¿No tienes una cuenta? Crea una...
                  </Button>
                </div>
              </form>
            )}
          </Formik>
          <br />
          <div className={classes.passwordLink}>
            <a
              href="#"
              className={classes.colorLink}
              onClick={goToResetPassword}
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;
