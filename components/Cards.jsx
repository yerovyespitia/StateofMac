import styles from "../styles/cards.module.scss";
import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import expand from "../public/images/expand.svg";
import { useSelector } from "react-redux";

const Cards = () => {
  const [games, setGames] = useState([]);
  const [reports, setReports] = useState([]);
  const [showButtons, setShowButtons] = useState(false);
  const [selected, setSelected] = useState("All Games");
  const options = ["All Games"];
  const gamesFiltered = useSelector((state) => state.games.value);

  const handleFilterButtons = () => {
    setShowButtons(!showButtons);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/games`, {
        params: { limit: 12, page: 1 },
      })
      .then((res) => setGames(res.data));
    axios
      .get("http://localhost:3001/api/comments/Cuphead/ru")
      .then((res) => setReports(res.data));
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
      {games
        .filter((g, i) => {
          if (gamesFiltered.searchGame === "") {
            return <Card game={g} key={i} />;
          } else if (
            g.title
              .toLowerCase()
              .includes(gamesFiltered.searchGame.toLowerCase())
          ) {
            return <Card game={g} key={i} />;
          }
          return false;
        })
        .map((g, i) => (
          <Card game={g} reports={reports} key={i} />
        ))}
    </div>
  );
};

export default Cards;
