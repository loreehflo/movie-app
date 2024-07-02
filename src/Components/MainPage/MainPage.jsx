import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Movie from "../Movie/Movie";
import useStyles from "./Styles.MainPage.module";
import CarouselSlider from "../Carousel/CarouselSlider";

const MainPage = () => {
  const classes = useStyles();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    const apiKey = "abf382d63bc5441ae88f544c3d41d131";

    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
    );

    const movies = await response.json();
    setMovies(movies.results);

    //console.log(movies);
  }

  return (
    <div className={classes.mainBackgroundColor}>
      <NavBar />
      <CarouselSlider movies={movies} />

      <div className={classes.titleContainer}>
        <p className={classes.title}>Películas más vistas</p>
      </div>

      <div className={classes.posterPosition}>
        {movies.map((movie, index) => {
          return <Movie key={`movie-${index}`} {...movie} />;
        })}
      </div>
    </div>
  );
};

export default MainPage;
