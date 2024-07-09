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
import useStyles from "./Styles.MovieCard.module";

const MovieCard = (props) => {
  const classes = useStyles();

  const url = "https://image.tmdb.org/t/p/w500";

  const releaseYear = props.release_date.substr(0, 4);
  const voteAverage = Math.floor(props.vote_average);
  let arr = Array.from({ length: voteAverage }, () => 0);

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
          <PlayArrow className={classes.iconBackground} />
        </IconButton>
        <IconButton>
          <Info className={classes.iconBackground} />
        </IconButton>
      </CardActions>
      <CardContent className={classes.backgroundCard}>
        <Typography variant="body1" color="text.primary">
          {`${props.original_title}`}
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
