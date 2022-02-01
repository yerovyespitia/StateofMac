import styles from "../styles/card.module.scss";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { useDispatch } from "react-redux";
import { search } from "../redux/gamesSlice";

const Card = ({ game, reports }) => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(search({ searchGame: "" }));
  };
  return (
    <>
      <Link href={`/games/${game.title}`}>
        <div className={styles.container} onClick={handleOnClick}>
          <div className={styles.cardImgContainer}>
            <Image
              src={game.wallpaper}
              width={374}
              height={221}
              className={styles.cardImg}
            />
          </div>
          <div className={styles.cardContent}>
            <p className={styles.cardContentTitle}>{game.title}</p>
            <p className={styles.cardContentUpdated}>
              Updated {moment(reports.updatedAt).format("ll")}
            </p>
            <p className={styles.cardContentReports}>
              Reports {reports.reports}
            </p>
            {game.state === "Unknown" && (
              <p className={styles.gameState} style={{ color: "#7E7E7E" }}>
                Hasn't been rated
              </p>
            )}
            {game.state === "Perfect" && (
              <p className={styles.gameState} style={{ color: "#78BF58" }}>
                Runs perfectly, maybe need some tweaks
              </p>
            )}
            {game.state === "Playable" && (
              <p className={styles.gameState} style={{ color: "#C98452" }}>
                Runs with some issues but overall a good experience
              </p>
            )}
            {game.state === "Unplayable" && (
              <p className={styles.gameState} style={{ color: "#C95252" }}>
                Often crashes, doesn't start, too many issues
              </p>
            )}
            {game.state === "Tied" && (
              <p className={styles.gameState} style={{ color: "#BBC952" }}>
                The community is divided about this game
              </p>
            )}
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
