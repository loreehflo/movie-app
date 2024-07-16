import React from "react";
import { IconButton } from "@material-ui/core";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import PlayCircle from "@mui/icons-material/PlayCircle";
import { useLocation, useNavigate } from "react-router-dom";
import useStyles from "./Styles.VerPelicula.module";

const VerPelicula = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const { propsBackdrop, propsTitulo } = location.state;
  // console.log(propsTitulo);

  const url = "https://image.tmdb.org/t/p/w500";

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div
      className={classes.backgroundContainer}
      style={{
        backgroundImage: `linear-gradient(rgba(10,13, 46, 0.5), rgba(10, 13, 24)), url(${url}${propsBackdrop})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={classes.headerContainer}>
        <IconButton>
          <ChevronLeft
            className={classes.backButton}
            fontSize="large"
            onClick={goToHome}
          />
        </IconButton>
        <h1>{propsTitulo}</h1>
      </div>
      <div className={classes.playContainer}>
        <IconButton>
          <PlayCircle className={classes.playIcon} fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default VerPelicula;
