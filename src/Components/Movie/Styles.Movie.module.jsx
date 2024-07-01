import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  poster: {
    height: "400px",
    width: "250px",
    margin: "15px",
  },
  information: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default useStyles;
