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
    justifyContent: "center",
  },
  widthContainer: {
    width: "25%",
  },
  fontSize: {
    fontSize: "40px",
  },
  degraded: {
    background: "linear-gradient(to right, #ca2173, #ff5900)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    marginBottom: "-40px",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
  },
  signInInputs: {
    borderRadius: "5px",
  },
  errorStyle: {
    color: "#ff5900",
  },
  styleConditions: {
    fontSize: "10px",
  },
  signInButton: {
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
