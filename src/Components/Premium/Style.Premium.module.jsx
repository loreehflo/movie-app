import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContaner: {
    backgroundColor: "#0a0d18",
    color: "#f2f2f2",
    height: "100vh",
    width: "100wh",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "50px",
  },
  backButton: {
    color: "#f2f2f2",
  },
  viewContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  widthContainer: {
    width: "25%",
  },
  premiumHeader: {
    fontSize: "40px",
  },
  degraded: {
    background: "linear-gradient(to right, #ca2173, #ff5900)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    marginBottom: "-40px",
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  doneIcon: {
    color: "#ff5900",
    marginRight: "5px",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
  },
  errorStyle: {
    color: "#ff5900",
  },
  premiumButton: {
    backgroundColor: "#ff5900",
    color: "#f2f2f2",
    "&:hover": {
      backgroundColor: "#ff702e",
    },
    padding: "15px",
    marginTop: "20px",
  },
  freeButton: {
    backgroundColor: "#383b44",
    color: "#f2f2f2",
    "&:hover": {
      backgroundColor: "#67696f",
    },
    padding: "15px",
  },
}));

export default useStyles;
