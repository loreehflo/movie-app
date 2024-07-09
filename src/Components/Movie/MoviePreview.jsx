import React from "react";
import { useLocation } from "react-router-dom";
import PlayArrow from "@mui/icons-material/PlayArrow";
import { Button } from "@material-ui/core";
import useStyles from "./Styles.MoviePreview.module";

const MoviePreview = () => {
  const classes = useStyles();
  const location = useLocation();
  const { propsBackdrop, propsTitulo, propsOview } = location.state;
  // console.log(propsOview);

  const url = "https://image.tmdb.org/t/p/w500";

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
        <p className={classes.paragraphSize}>{propsOview}</p>
        <Button className={classes.customColorButton}>
          <PlayArrow />
          Ver Ahora
        </Button>
      </div>
    </div>
  );
};

export default MoviePreview;
