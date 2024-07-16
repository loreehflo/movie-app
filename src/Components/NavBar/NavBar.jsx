import React, { useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  IconButton,
  Button,
  MenuList,
  MenuItem,
  Paper,
  InputBase,
  ClickAwayListener,
  Popper,
} from "@material-ui/core";
import Person from "@mui/icons-material/Person";
import Search from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import useStyles from "./Styles.NavBar.module";

const NavBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  // show peliculas menu
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  //show searchBar
  const [openSearchBar, setOpenSearchBar] = useState(false);

  const searhBar = () => {
    setOpenSearchBar((prevopenSearchBar) => !prevopenSearchBar);
    //console.log(openSearchBar);
  };

  const goToEnVivo = () => {
    navigate("/en-vivo");
  };

  const goToDeportes = () => {
    navigate("/deportes");
  };

  const goToNoticias = () => {
    navigate("/noticias");
  };

  const goToPruebaPremium = () => {
    navigate("/premium");
  };

  const goToInicio = () => {
    navigate("/");
  };

  const goToNovelas = () => {
    navigate("/novelas");
  };

  const goToSeries = () => {
    navigate("/series");
  };

  const goToKids = () => {
    navigate("/kids");
  };

  const goToIniciarSesion = () => {
    navigate("/iniciar-sesion");
  };

  return (
    <div>
      <AppBar className={classes.backgroundNavBar}>
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="h5" className={classes.marginRightLogo}>
              LOREFLiX
            </Typography>
            <Button
              id="resources-button"
              className={`${classes.marginRightButton} ${classes.textColor}`}
              ref={anchorRef}
              onClick={handleToggle}
            >
              Películas
            </Button>
            <Button
              className={`${classes.marginRightText} ${classes.textColor}`}
              onClick={goToEnVivo}
            >
              En Vivo
            </Button>
            <Button
              className={`${classes.marginRightText} ${classes.textColor}`}
              onClick={goToDeportes}
            >
              Deportes
            </Button>
            <Button className={classes.textColor} onClick={goToNoticias}>
              Noticias
            </Button>
            <Typography className={classes.title}></Typography>
            <Button
              className={`${classes.customColorButton} ${classes.marginRightButton}`}
              onClick={goToPruebaPremium}
            >
              Prueba Premium
            </Button>

            {openSearchBar ? (
              <Paper component="form">
                <IconButton className={classes.iconButton} onClick={searhBar}>
                  <Search />
                </IconButton>
                <InputBase
                  className={classes.input}
                  placeholder="Buscar películas, series, novelas..."
                />
              </Paper>
            ) : (
              <IconButton
                className={`${classes.marginRightButton} ${classes.backgroundIcons}`}
                onClick={searhBar}
              >
                <Search />
              </IconButton>
            )}
            {openSearchBar ? (
              <IconButton
                className={`${classes.marginLeftButton} ${classes.backgroundIcons}`}
                onClick={goToIniciarSesion}
              >
                <Person />
              </IconButton>
            ) : (
              <IconButton
                className={`${classes.marginRightButton} ${classes.backgroundIcons}`}
                onClick={goToIniciarSesion}
              >
                <Person />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Popper open={open} anchorEl={anchorRef.current}>
        <Paper className={classes.navBarMenu}>
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList
              autoFocusItem={open}
              id="resources-button"
              onKeyDown={handleListKeyDown}
            >
              <MenuItem onClick={handleClose} className={classes.menuLinks}>
                <a onClick={goToInicio}>Inicio</a>
              </MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuLinks}>
                <a onClick={goToNovelas}>Novelas</a>
              </MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuLinks}>
                <a onClick={goToSeries}>Series</a>
              </MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuLinks}>
                <a onClick={goToKids}>Kids</a>
              </MenuItem>
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>

      <div className={classes.offset}></div>
    </div>
  );
};

export default NavBar;
