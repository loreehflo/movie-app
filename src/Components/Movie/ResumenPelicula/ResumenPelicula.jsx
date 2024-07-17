import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PlayArrow from "@mui/icons-material/PlayArrow";
import { Button } from "@material-ui/core";
import useStyles from "./Styles.ResumenPelicula.module";

const ResumenPelicula = () => {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const { propsBackdrop, propsTitulo, propsOverView } = location.state;
  // console.log(propsOverView);

  const url = "https://image.tmdb.org/t/p/w500";

  const goToSeeMovie = () => {
    navigate("/ver-pelicula", {
      state: {
        propsBackdrop: propsBackdrop,
        propsTitulo: propsTitulo,
      },
    });
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
      <div className={classes.movieOverviewContainer}>
        <h1 className={classes.titleSize}>{propsTitulo}</h1>
        <p className={classes.paragraphSize}>{propsOverView}</p>
        <Button className={classes.customColorButton} onClick={goToSeeMovie}>
          <PlayArrow />
          Ver Ahora
        </Button>
      </div>
    </div>
  );
};

export default ResumenPelicula;
