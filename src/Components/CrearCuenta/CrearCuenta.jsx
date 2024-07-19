import React from "react";
import useStyles from "./Styles.CrearCuenta.modules";
import { TextField, Button, IconButton } from "@material-ui/core";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import * as Yup from "yup";

const CrearCuenta = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate("/iniciar-sesion");
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Ingrese un email válido")
      .required("El email es requerido"),
    password: Yup.string().required("La contraseña es requerida"),
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
        <div className={classes.widthContainer}>
          <h1 className={classes.signUpHeader}>LOREFLiX</h1>
          <h1 className={`${classes.degraded} ${classes.signUpHeader}`}>
            Crea tu cuenta
          </h1>
          <h1 className={classes.signUpHeader}>y empieza a disfrutar</h1>
          <Formik
            initialValues={{ email: "", password: "" }}
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
                    className={classes.signUpInputs}
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
                    className={classes.signUpInputs}
                    placeholder="Contraseña"
                    InputProps={{
                      style: { color: "#f2f2f2", border: "1px solid #67696f" },
                    }}
                  />
                  {errors.password && touched.password && (
                    <div className={classes.errorStyle}>{errors.password}</div>
                  )}
                  <br />
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      labelPlacement="end"
                      label="Estoy de acuerdo con los Términos y Condiciones"
                    />
                  </FormGroup>
                  <br />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={classes.signUpButton}
                  >
                    Comenzar
                  </Button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CrearCuenta;
