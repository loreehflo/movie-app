import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  mainBackgroundColor: {
    backgroundColor: "#0a0d18",
  },
  posterPosition: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  carouselWidth: {
    width: "100%",
  },
}));

export default useStyles;
