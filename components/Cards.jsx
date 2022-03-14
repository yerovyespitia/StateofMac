// next / react & redux / styles / external libraries / images / components
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { skeletonLoading } from "../redux/loadingSlice";

import styles from "../styles/cards.module.scss";

import { nanoid } from "nanoid";
import { motion } from "framer-motion";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import expand from "../public/images/expand.svg";

import Card from "./Card";
import NotFound from "./NotFound";

const Cards = () => {
  const dispatch = useDispatch();
  const gamesFiltered = useSelector((state) => state.games.value);
  const [games, setGames] = useState([]);
  const [showButtons, setShowButtons] = useState(false);
  const [selected, setSelected] = useState("All Games");
  const [page, setPage] = useState(1);
  const [prevSearchGame, setPrevSearchGame] = useState("");
  const [loadMore, setLoadMore] = useState(false);
  const options = ["All Games"];

  // Filter game cards
  const handleFilterButtons = () => {
    setShowButtons(!showButtons);
  };

  // Show more game cards
  const loadMoreGames = async () => {
    setPage((page += 1));
    setLoadMore(true);
  };

  // Stop skeleton loading animation
  useEffect(() => {
    setTimeout(() => {
      dispatch(skeletonLoading({ loading: false }));
    }, 1500);
  }, []);

  // Fetch game cards and search games
  useEffect(() => {
    axios
      .get(`${process.env.API_URL}api/games?`, {
        params: {
          page,
          limit: 10,
          searchGame: gamesFiltered.searchGame,
        },
      })
      .then((res) => {
        if (gamesFiltered.searchGame != "") {
          setPrevSearchGame(gamesFiltered.searchGame);
          if (!loadMore) {
            setGames(res.data);
            setPage(1);
          } else {
            setGames([...games, ...res.data]);
          }
          setLoadMore(false);
        } else if (prevSearchGame != "" && gamesFiltered.searchGame === "") {
          setGames(res.data);
          setPrevSearchGame("");
          setPage(1);
        } else {
          setGames([...games, ...res.data]);
        }
      });
  }, [page, gamesFiltered]);

  return (
    <main className={styles.cardsContainer}>
      <div className={styles.cardsFilterButton}>
        {/* Filter Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleFilterButtons}
        >
          {selected}
          <span className={styles.expandIcon}>
            <Image src={expand} alt="expand icon" />
          </span>
        </motion.button>

        {/* Filter Button Options */}
        {showButtons && (
          <>
            {options.map((option) => (
              <button
                onClick={() => {
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

      {/* Game Cards & Automatic Infinite Scroll */}
      <InfiniteScroll
        style={{ overflow: "visible" }}
        dataLength={games.length}
        next={loadMoreGames}
        hasMore={gamesFiltered.searchGame != "" ? false : true}
        // loader={
        //   <ReactLoading
        //     type={"spinningBubbles"}
        //     color={"#fff"}
        //     height={"10%"}
        //     width={"10%"}
        //   />
        // }
      >
        {games.map((g) => (
          <Card game={g} key={nanoid()} />
        ))}
      </InfiniteScroll>

      {/* Not Found Text */}
      {loadMore === false && games.length < 1 && <NotFound />}
    </main>
  );
};

export default Cards;
