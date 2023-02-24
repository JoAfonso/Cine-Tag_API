import styles from "./Rodape.module.css";

const Rodape = () => {
  return (
    <div>
      <footer className={styles.container_rodape}>
        <h2 className={styles.rodape}>Desenvolvido por Alura.</h2>
      </footer>
    </div>
  );
};

export default Rodape;
