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
    navigate("/signin");
  };

  const goToSignUp = () => {
    navigate("/signup");
  };

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
          <h1 className={`${classes.degraded} ${classes.fontSize}`}>
            Con Premium
          </h1>
          <h1 className={classes.fontSize}>tienes más</h1>
          <div className={classes.iconcontainer}>
            <Done className={classes.doneIcon} />
            <p>Series y películas premium</p>
          </div>
          <div className={classes.iconcontainer}>
            <Done className={classes.doneIcon} />
            <p>Liga MX y más</p>
          </div>
          <div className={classes.iconcontainer}>
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
                    className={classes.signInButton}
                    onClick={goToSignIn}
                  >
                    Prueba Premium
                  </Button>
                  <br />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={classes.signUpButton}
                    onClick={goToSignUp}
                  >
                    O crea una prueba gratis
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
