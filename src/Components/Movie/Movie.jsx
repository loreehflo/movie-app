import React from "react";
import useStyles from "./Styles.Movie.module";
import { Icon } from "@material-ui/core";

const Movie = (props) => {
  const classes = useStyles();
  //console.log(props);

  const url = "https://image.tmdb.org/t/p/w500";

  const titleMovie = props.title;
  const maxLength = 30;

  const truncateString =
    titleMovie.length > maxLength
      ? titleMovie.substring(0, maxLength) + "..."
      : titleMovie;

  return (
    <div className={classes.mainBackgroundColor}>
      <img
        src={`${url}${props.poster_path}`}
        alt={props.title}
        className={classes.poster}
      />
      {/* <p className={`${classes.title} ${classes.margin}`}>{truncateString}</p>
      <div className={classes.information}>
        <Icon>star</Icon>
        <p className={classes.margin}>{Math.round(props.vote_average)}</p>
      </div> */}
    </div>
  );
};

export default Movie;
