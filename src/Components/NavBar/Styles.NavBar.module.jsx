import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  backgroundNavBar: {
    backgroundColor: "#0a0d18",
    padding: "10px",
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
  textColor: {
    color: "#95969b",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "white",
    },
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
    backgroundColor: "#21242e",
    color: "#95969b",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#0a0d18",
      backgroundColor: "#95969b",
    },
  },
  input: {
    width: 300,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  navBarMenu: {
    backgroundColor: "rgba(33,36,46,.95)",
    borderRadius: 12,
    marginTop: 20,
    position: "absolute",
    transform: "translate(-50%)",
    minWidth: "172px",
  },
  menuLinks: {
    textDecoration: "none",
    color: "#95969b",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "white",
    },
  },
}));

export default useStyles;
