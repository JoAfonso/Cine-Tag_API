import { Link } from "react-router-dom";
import styles from "./CabecalhoLink.module.css";

const CabecalhoLink = ({ url, children }) => {
  return (
    <div>
      <Link to={url} className={styles.link}>
        {children}
      </Link>
    </div>
  );
};

export default CabecalhoLink;
