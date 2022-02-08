import styles from "../styles/card.module.scss";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import GameState from "./GameState";

const Card = ({ game }) => {
  return (
    <>
      <Link href={`/games/${game.title}`} passHref>
        <div className={styles.container}>
          <div className={styles.cardImgContainer}>
            <Image
              src={game.wallpaper}
              width={374}
              height={221}
              className={styles.cardImg}
              alt="wallpaper"
            />
          </div>
          <div className={styles.cardContent}>
            <p className={styles.cardContentTitle}>{game.title}</p>
            <p className={styles.cardContentUpdated}>
              Updated {moment(game.updatedAt).format("ll")}
            </p>
            <p className={styles.cardContentReports}>Reports {game.reports}</p>
            <GameState game={game.state} />
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
