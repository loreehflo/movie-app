import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  backgroundContainer: {
    height: "100vh",
    width: "100wh",
    paddingLeft: "80px",
  },
  movieOverviewContainer: {
    color: "#f2f2f2",
    display: "flex",
    flexDirection: "column",
    width: "50%",
  },
  titleSize: {
    fontSize: "100px",
    lineHeight: "90px",
  },
  paragraphSize: {
    fontSize: "25px",
  },
  customColorButton: {
    backgroundColor: "#ff5900",
    "&:hover": {
      backgroundColor: "#ff702e",
    },
    color: "#f2f2f2",
    height: "48px",
    width: "160px",
  },
}));

export default useStyles;
