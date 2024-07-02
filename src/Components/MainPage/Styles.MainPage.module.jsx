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
  },
  posterContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  pagination: {
    backgroundColor: "#0a0d18",
    padding: "15px",
  },
}));

export default useStyles;
