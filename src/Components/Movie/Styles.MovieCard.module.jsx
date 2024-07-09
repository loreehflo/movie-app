import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardMargin: {
    margin: "10px",
  },
  backgroundCard: {
    backgroundColor: "#f2f2f2",
  },
  iconBackground: {
    backgroundColor: "#383b44",
    borderRadius: "15px",
    color: "#f2f2f2",
    "&:hover": {
      color: "#ff5900",
    },
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
  },
}));

export default useStyles;
