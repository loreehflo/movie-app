import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Movie from "../Movie/Movie";
import useStyles from "./Styles.MainPage.module";
import CarouselSlider from "../Carousel/CarouselSlider";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const MainPage = () => {
  const classes = useStyles();

  const [movies, setMovies] = useState([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    getMovies();
  }, [currentPage]);

  async function getMovies() {
    const apiKey = "abf382d63bc5441ae88f544c3d41d131";

    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${currentPage}`
    );

    const movies = await response.json();
    setMovies(movies.results);
    setTotalPages(Math.ceil(movies.total_pages / itemsPerPage));
    // console.log(movies);
  }

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className={classes.mainBackgroundColor}>
      <NavBar />
      <CarouselSlider movies={movies} />
      <div className={classes.titleContainer}>
        <p className={classes.title}>Películas más vistas</p>
      </div>
      <div className={classes.posterContainer}>
        {movies.map((movie, index) => {
          return <Movie key={`movie-${index}`} {...movie} />;
        })}
      </div>
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handleChangePage}
          className={classes.pagination}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#95969b",
              borderRadius: "50%",
              margin: "0 2px",
              "&.Mui-selected": {
                backgroundColor: "#21242e",
                color: "white",
              },
              "&:hover": {
                backgroundColor: "#95969b",
                color: "#21242e",
              },
            },
            "& .MuiPagination-ul": {
              justifyContent: "center",
            },
          }}
        />
      </Stack>
    </div>
  );
};

export default MainPage;
