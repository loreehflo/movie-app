import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useStyles from "./Style.CarouselSlider.module";

const CarouselSlider = (props) => {
  const classes = useStyles();

  //console.log(123, props);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const url = "https://image.tmdb.org/t/p/w500";

  return (
    <div
      className={`${classes.carouselWidth} ${classes.carouselBackgroundColor}`}
    >
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="ul.react-multi-carousel-dot-list"
      >
        {props.movies.map((popularMovie, index) => {
          return (
            <div key={`popularMovie-${index}`}>
              <img
                src={`${url}${popularMovie.backdrop_path}`}
                alt={popularMovie.title}
                className={classes.slide}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
