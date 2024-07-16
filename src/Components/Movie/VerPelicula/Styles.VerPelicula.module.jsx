import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  backgroundContainer: {
    height: "100vh",
    width: "100wh",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "#f2f2f2",
    padding: "50px",
  },
  backButton: {
    color: "#f2f2f2",
  },
  playContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "200px",
  },
  playIcon: {
    color: "#f2f2f2",
  },
}));

export default useStyles;
