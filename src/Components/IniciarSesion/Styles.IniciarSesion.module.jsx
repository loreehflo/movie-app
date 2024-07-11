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
  signInButton: {
    backgroundColor: "#ff5900",
    color: "#f2f2f2",
    "&:hover": {
      backgroundColor: "#ff702e",
    },
    padding: "15px",
    marginTop: "20px",
  },
  signUpButton: {
    backgroundColor: "#383b44",
    color: "#f2f2f2",
    "&:hover": {
      backgroundColor: "#67696f",
    },
    padding: "15px",
  },
  passwordLink: {
    display: "flex",
    justifyContent: "center",
    fontStyle: "none",
  },
  colorLink: {
    color: "#f2f2f2",
    "&:hover": {
      color: "#ff5900",
    },
    textDecoration: "none",
  },
}));

export default useStyles;
