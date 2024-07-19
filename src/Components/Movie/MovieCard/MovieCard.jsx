import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PlayArrow from "@mui/icons-material/PlayArrow";
import Info from "@mui/icons-material/Info";
import Star from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import useStyles from "./Styles.MovieCard.module";

const MovieCard = (props) => {
  // console.log(props);
  const classes = useStyles();

  const url = "https://image.tmdb.org/t/p/w500";

  const releaseYear = props.release_date.substr(0, 4);
  const voteAverage = Math.floor(props.vote_average);
  let arr = Array.from({ length: voteAverage }, () => 0);

  const navigate = useNavigate();

  const goToPlayMovie = () => {
    navigate("/ver-pelicula", {
      state: {
        propsBackdrop: props.backdrop_path,
        propsTitulo: props.title,
      },
    });
  };

  const goToMoviePreview = () => {
    navigate("/resumen-pelicula", {
      state: {
        propsBackdrop: props.backdrop_path,
        propsTitulo: props.title,
        propsOverView: props.overview,
      },
    });
  };

  return (
    <Card sx={{ maxWidth: 345 }} className={classes.cardMargin}>
      <CardMedia
        component="img"
        height="400"
        image={`${url}${props.poster_path}`}
        alt="Paella dish"
      />
      <CardActions disableSpacing className={classes.backgroundCard}>
        <IconButton>
          <PlayArrow
            className={classes.iconBackground}
            onClick={goToPlayMovie}
          />
        </IconButton>
        <IconButton>
          <Info className={classes.iconBackground} onClick={goToMoviePreview} />
        </IconButton>
      </CardActions>
      <CardContent className={classes.backgroundCard}>
        <Typography variant="body1" color="text.primary">
          {`${props.title}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {releaseYear}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className={classes.iconContainer}
        >
          {arr.map((item, index) => (
            <div key={index}>
              <Star sx={{ width: "15px" }} />
            </div>
          ))}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
