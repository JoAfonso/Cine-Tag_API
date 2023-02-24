import { Link } from "react-router-dom";
import CabecalhoLink from "../cabecalhoLink/CabecalhoLink";
import logo from "./logo.png";
import styles from "./Cabecalho.module.css";

const Cabecalho = () => {
  return (
    <div>
      <header className={styles.cabecalho}>
        <Link to="/">
          <img src={logo} alt="Logo do CineTag" />
        </Link>
        <nav className={styles.navegacao}>
            <CabecalhoLink url="./">
                Home
            </CabecalhoLink>
            <CabecalhoLink url="./Favoritos">
                Favoritos
            </CabecalhoLink>
        </nav>
      </header>
    </div>
  );
};

export default Cabecalho;
