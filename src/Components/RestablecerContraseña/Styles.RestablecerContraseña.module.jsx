import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContaner: {
    backgroundColor: "#0a0d18",
    color: "#f2f2f2",
    height: "100vh",
    width: "100wh",
  },
  backButton: {
    color: "#f2f2f2",
    padding: "50px",
  },
  viewContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  resetHeader: {
    fontSize: "60px",
    marginBottom: "-50px",
  },
  degraded: {
    background: "linear-gradient(to right, #ca2173, #ff5900)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    width: "400px",
    marginTop: "50px",
  },
  resetInput: {
    borderRadius: "5px",
  },
  errorStyle: {
    color: "#ff5900",
  },
  resetButton: {
    backgroundColor: "#ff5900",
    color: "#f2f2f2",
    "&:hover": {
      backgroundColor: "#ff702e",
    },
    padding: "15px",
    marginTop: "20px",
  },
}));

export default useStyles;
