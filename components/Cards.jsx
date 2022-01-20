import styles from "../styles/cards.module.scss";
import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";

const Cards = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/games")
      .then((res) => setGames(res.data));
  }, []);

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardsFilterButton}>
        <button>Recently Added</button>
        <button className={styles.cardsActive}>Lack Reports</button>
        <button className={styles.cardsActive}>More Populars</button>
        <button className={styles.cardsActive}>Better Rated</button>
        <button className={styles.cardsActive}>Worst Rated</button>
      </div>
      {games.map((g, i) => (
        <Card game={g} key={i} />
      ))}
    </div>
  );
};

export default Cards;
