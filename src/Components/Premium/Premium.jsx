import React from "react";
import useStyles from "./Style.Premium.module";
import { Button, IconButton } from "@material-ui/core";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import Done from "@mui/icons-material/Done";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

const Premium = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToSignIn = () => {
    navigate("/iniciar-sesion");
  };

  const goToSignUp = () => {
    navigate("/crear-cuenta");
  };

  return (
    <div className={classes.mainContaner}>
      <div className={classes.buttonContainer}>
        <IconButton>
          <ChevronLeft
            className={classes.backButton}
            onClick={goToHome}
            fontSize="large"
          />
        </IconButton>
      </div>
      <div className={classes.viewContainer}>
        <div className={classes.widthContainer}>
          <h1 className={`${classes.degraded} ${classes.premiumHeader}`}>
            Con Premium
          </h1>
          <h1 className={classes.premiumHeader}>tienes más...</h1>
          <div className={classes.iconContainer}>
            <Done className={classes.doneIcon} />
            <p>Series y Películas Premium</p>
          </div>
          <div className={classes.iconContainer}>
            <Done className={classes.doneIcon} />
            <p>Liga MX y más</p>
          </div>
          <div className={classes.iconContainer}>
            <Done className={classes.doneIcon} />
            <p>Sin Anuncios</p>
          </div>
          <div className={classes.iconContainer}>
            <Done className={classes.doneIcon} />
            <p>Cancela cuando quieras</p>
          </div>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              // Aquí manejas la lógica para enviar los datos del formulario
              console.log(values);
            }}
          >
            {({ handleSubmit, isSubmitting, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <div className={classes.formContainer}>
                  {errors.password && touched.password && (
                    <div className={classes.errorStyle}>{errors.password}</div>
                  )}
                  <br />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={classes.premiumButton}
                    onClick={goToSignUp}
                  >
                    Empieza ya
                  </Button>
                  <br />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={classes.freeButton}
                    onClick={goToSignIn}
                  >
                    Ya tengo plan premium, Iniciar Sesion...
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

export default Premium;
