import React from "react";
import useStyles from "./Styles.RestablecerContraseña.module";
import { TextField, Button, IconButton } from "@material-ui/core";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const RestablecerContraseña = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate("/iniciar-sesion");
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Ingrese un email válido")
      .required("El email es requerido"),
  });

  return (
    <div className={classes.mainContaner}>
      <div className={classes.buttonContainer}>
        <IconButton>
          <ChevronLeft
            className={classes.backButton}
            onClick={goToSignIn}
            fontSize="large"
          />
        </IconButton>
      </div>
      <div className={classes.viewContainer}>
        <div>
          <h1 className={`${classes.degraded} ${classes.resetHeader}`}>
            Ingresa tu correo
          </h1>
          <h1 className={classes.resetHeader}>para restablecer</h1>
          <h1 className={classes.resetHeader}>tu contraseña</h1>
        </div>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // Aquí manejas la lógica para enviar los datos del formulario
            // console.log(values);
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
                  className={classes.resetInput}
                  placeholder="ejemplo@email.com"
                  InputProps={{
                    style: { color: "#f2f2f2", border: "1px solid #67696f" },
                  }}
                />
                {errors.email && touched.email && (
                  <div className={classes.errorStyle}>{errors.email}</div>
                )}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={classes.resetButton}
                >
                  Enviar
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RestablecerContraseña;
