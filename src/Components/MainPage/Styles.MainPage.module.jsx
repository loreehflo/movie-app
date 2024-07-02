import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainBackgroundColor: {
    backgroundColor: "#0a0d18",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "125px",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: "25px",
    backgroundColor: "#0a0d18",
  },
  posterPosition: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

export default useStyles;
