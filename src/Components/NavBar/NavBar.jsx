import React, { useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Icon,
  IconButton,
  Button,
  MenuList,
  MenuItem,
  Paper,
  InputBase,
  ClickAwayListener,
  Popper,
} from "@material-ui/core";
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
    navigate("/envivo");
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

  return (
    <div>
      <AppBar className={classes.backgroundNavBar}>
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="h4" className={classes.marginRightLogo}>
              VIX
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
                <IconButton
                  className={classes.iconButton}
                  aria-label="menu"
                  onClick={searhBar}
                >
                  <Icon>searchIcon</Icon>
                </IconButton>
                <InputBase
                  className={classes.input}
                  placeholder="Buscar películas, series, novelas..."
                  // inputProps={{
                  //   "aria-label": "Buscar películas, series, novelas",
                  // }}
                />
              </Paper>
            ) : (
              <IconButton
                className={`${classes.marginRightButton} ${classes.backgroundIcons}`}
                color="inherit"
                onClick={searhBar}
              >
                <Icon>searchIcon</Icon>
              </IconButton>
            )}
            {openSearchBar ? (
              <IconButton
                className={`${classes.marginLeftButton} ${classes.backgroundIcons}`}
              >
                <Icon>personIcon</Icon>
              </IconButton>
            ) : (
              <IconButton
                className={`${classes.marginRightButton} ${classes.backgroundIcons}`}
                color="inherit"
              >
                <Icon>personIcon</Icon>
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
                <a onClick={goToPruebaPremium}>Premium</a>
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
