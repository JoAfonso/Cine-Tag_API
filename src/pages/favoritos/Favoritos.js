import Banner from "../../components/banner/Banner";
import Card from "../../components/card/Card";
import Titulo from "../../components/titulo/Titulo";
import { useFavoritoContext } from "../../contextos/Favoritos";
import styles from "./Favoritos.module.css";

const Favoritos = () => {
  const { favorito } = useFavoritoContext();

  return (
    <div>
      <Banner imagem="favoritos"/>
      <Titulo>
        Meus Favoritos
      </Titulo>
      <section className={`${styles.container}`}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </div>
  );
};

export default Favoritos;
