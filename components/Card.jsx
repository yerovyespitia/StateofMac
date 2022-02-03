import styles from "../styles/card.module.scss";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const Card = ({ game }) => {
  return (
    <>
      <Link href={`/games/${game.title}`}>
        <div className={styles.container}>
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
              Updated {moment(game.updatedAt).format("ll")}
            </p>
            <p className={styles.cardContentReports}>
              Reports {game.reports}
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
