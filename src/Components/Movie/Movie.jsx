import React, { useState } from "react";
import useStyles from "./Styles.Movie.module";
import MovieCard from "./MovieCard";

const Movie = (props) => {
  const classes = useStyles();
  //console.log(props);

  const url = "https://image.tmdb.org/t/p/w500";

  const [onHover, setOnHover] = useState(false);

  const handleMouseOverOrOut = () => {
    setOnHover((prevHover) => !prevHover);
  };

  return (
    <div className={classes.mainBackgroundColor}>
      <div
        onMouseEnter={handleMouseOverOrOut}
        onMouseLeave={handleMouseOverOrOut}
      >
        {!onHover ? (
          <img
            src={`${url}${props.poster_path}`}
            alt={props.title}
            className={classes.poster}
          />
        ) : (
          <MovieCard {...props} />
        )}
      </div>
    </div>
  );
};

export default Movie;
