import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Movie from "../Movie/Movie";
import useStyles from "./Styles.MainPage.module";
import CarouselSlider from "../Carousel/CarouselSlider";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const MainPage = () => {
  const classes = useStyles();

  const [allMovies, setAllMovies] = useState([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10;

  // Filtrar peliculas
  const [parentInputValue, setParentInputValue] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, [currentPage]);

  async function getMovies() {
    try {
      const apiKey = "abf382d63bc5441ae88f544c3d41d131";

      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${currentPage}`
      );

      const movies = await response.json();

      setAllMovies(movies.results);

      setTotalPages(Math.ceil(movies.total_pages / itemsPerPage));
      // console.log(allMovies)
    } catch (error) {
      console.log(error);
    }
  }

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleInputValueChange = (value) => {
    setParentInputValue(value);
  };

  useEffect(() => {
    // Filtrar películas basadas en el input de búsqueda
    if (parentInputValue === "") {
      setFilteredMovies(allMovies);
    } else {
      const filtered = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(parentInputValue.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  }, [allMovies, parentInputValue]);

  return (
    <div className={classes.mainBackgroundColor}>
      <NavBar onInputChange={handleInputValueChange} />
      <CarouselSlider movies={allMovies} />
      <div className={classes.titleContainer}>
        <p className={classes.title}>Películas más vistas</p>
      </div>
      <div className={classes.posterContainer}>
        {filteredMovies.map((movie, index) => (
          <Movie key={`movie-${index}`} {...movie} />
        ))}
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
