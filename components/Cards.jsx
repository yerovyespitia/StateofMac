// next / react & redux / styles / external libraries / images / components
import Image from "next/image";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from "../styles/cards.module.scss";

import { nanoid } from "nanoid";
import axios from "axios";

import expand from "../public/images/expand.svg";

import Card from "./Card";
import NotFound from "./NotFound";

const Cards = () => {
  const [games, setGames] = useState([]);
  const [showButtons, setShowButtons] = useState(false);
  const [selected, setSelected] = useState("All Games");
  const [pagination, setPagination] = useState(1);
  const [cardsLimit] = useState(15);
  const gamesArray = [];
  const options = ["All Games"];
  const gamesFiltered = useSelector((state) => state.games.value);
  const [prevSearchGame, setPrevSearchGame] = useState("");
  const [loadMore, setLoadMore] = useState(false);

  const handleFilterButtons = () => {
    setShowButtons(!showButtons);
  };

  const handleOnClick = () => {
    setPagination((pagination += 1));
    setLoadMore(true);
  };

  useEffect(() => {
    axios
      .get(`${process.env.API_URL}api/games?`, {
        params: {
          page: pagination,
          limit: cardsLimit,
          searchGame: gamesFiltered.searchGame,
        },
      })
      .then((res) => {
        if (gamesFiltered.searchGame != "") {
          setPrevSearchGame(gamesFiltered.searchGame);
          if (!loadMore) {
            setGames(res.data);
            setPagination(1);
          } else {
            gamesArray.push(...games, ...res.data);
            setGames(gamesArray);
          }
          setLoadMore(false);
        } else if (prevSearchGame != "" && gamesFiltered.searchGame === "") {
          setGames(res.data);
          setPrevSearchGame("");
          setPagination(1);
        } else {
          gamesArray.push(...games, ...res.data);
          setGames(gamesArray);
        }
      });
  }, [pagination, gamesFiltered]);

  return (
    <main className={styles.cardsContainer}>
      <div className={styles.cardsFilterButton}>
        <button onClick={handleFilterButtons}>
          {selected}
          <span className={styles.expandIcon}>
            <Image src={expand} alt="expand icon" />
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
      {games.map((g) => (
        <Card game={g} key={nanoid()} />
      ))}
      {games.length < 1 ? (
        <NotFound />
      ) : (
        <button className={styles.buttonLoadMore} onClick={handleOnClick}>
          Load More
        </button>
      )}
    </main>
  );
};

export default Cards;
