import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favoritos from "./pages/favoritos/Favoritos";
import Inicio from "./pages/inicio/Inicio";
import Player from "./pages/player/Player";
import NaoEncontrada from "./pages/naoEncontrada/NaoEncontrada";
import Paginabase from "./pages/paginabase/Paginabase";

function AppRoures() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Paginabase />}>
          <Route index element={<Inicio />} />
          <Route path="Favoritos" element={<Favoritos />} />
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoures;
