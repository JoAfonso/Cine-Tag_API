import { Outlet } from "react-router-dom";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import Container from "../../components/container/Container";
import Rodape from "../../components/rodape/Rodape";
import FavoritosProvider from "../../contextos/Favoritos";

const Paginabase = () => {
  return (
    <main>
      <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Rodape />
    </main>
  );
};

export default Paginabase;
