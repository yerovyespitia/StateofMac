import styles from "../styles/cards.module.scss";
import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import expand from "../public/images/expand.png";

const Cards = () => {
  const [games, setGames] = useState([]);
  const [showButtons, setShowButtons] = useState(false);
  const options = ["Recently Added", "Lack Reports", "With More Reports"];
  const [selected, setSelected] = useState("Recently Added");
  const handleFilterButtons = () => {
    setShowButtons(!showButtons);
  };
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/games")
      .then((res) => setGames(res.data));
  }, []);

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardsFilterButton}>
        <button onClick={handleFilterButtons}>
          {selected}
          <span className={styles.expandIcon}>
            <Image src={expand} />
          </span>
        </button>
        {showButtons && (
          <>
            {options.map((option) => (
              <button
                onClick={(e) => {
                  setSelected(option);
                  setShowButtons(!showButtons);
                }}
              >
                {option}
              </button>
            ))}
          </>
        )}
      </div>
      {games.map((g, i) => (
        <Card game={g} key={i} />
      ))}
    </div>
  );
};

export default Cards;
