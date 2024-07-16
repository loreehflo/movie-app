import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import MainPage from "./Components/MainPage/MainPage";
import EnVivo from "./Components/EnVivo/EnVivo";
import Deportes from "./Components/Deportes/Deportes";
import Noticias from "./Components/Noticias/Noticias";
import Premium from "./Components/Premium/Premium";
import Novelas from "./Components/Novelas/Novelas";
import Series from "./Components/Series/Series";
import Kids from "./Components/Kids/Kids";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResumenPelicula from "./Components/Movie/ResumenPelicula/ResumenPelicula";
import IniciarSesion from "./Components/IniciarSesion/IniciarSesion";
import CrearCuenta from "./Components/CrearCuenta/CrearCuenta";
import RestablecerContraseña from "./Components/RestablecerContraseña/RestablecerContraseña";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/en-vivo" element={<EnVivo />} />
          <Route path="/deportes" element={<Deportes />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/novelas" element={<Novelas />} />
          <Route path="/series" element={<Series />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/resumen-pelicula" element={<ResumenPelicula />} />
          <Route path="/iniciar-sesion" element={<IniciarSesion />} />
          <Route path="/crear-cuenta" element={<CrearCuenta />} />
          <Route
            path="/restablecer-contraseña"
            element={<RestablecerContraseña />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
