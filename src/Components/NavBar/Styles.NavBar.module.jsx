import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  backgroundNavBar: {
    backgroundColor: "#0a0d18",
  },
  marginRightLogo: {
    marginRight: theme.spacing(5),
  },
  marginRightButton: {
    marginRight: theme.spacing(3),
  },
  marginLeftButton: {
    marginLeft: theme.spacing(3),
  },
  marginRightText: {
    marginRight: theme.spacing(2),
  },
  button: {
    color: "white",
    textDecoration: "none",
  },
  title: {
    flexGrow: 1,
  },
  customColorButton: {
    border: "10px solid",
    borderImage: "linear-gradient(to right, #FE6B8B, #FF8E53) 1",
    borderWidth: "3px",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  backgroundIcons: {
    backgroundColor: "#383b44",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default useStyles;
