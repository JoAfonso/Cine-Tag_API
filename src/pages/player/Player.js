import { useParams } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import Titulo from "../../components/titulo/Titulo";
import styles from "./Player.module.css";
import NaoEncontrada from "../naoEncontrada/NaoEncontrada";
import { useState } from "react";
import { useEffect } from "react";

const Player = () => {
  const [video, setVideo] = useState([]);
  const parametros = useParams();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/JoAfonso/CineTag-api/videos?id=${parametros.id}`
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideo(...dados);
      });
  }, []);

  if (!video) {
    return <NaoEncontrada />;
  }
  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
};

export default Player;
