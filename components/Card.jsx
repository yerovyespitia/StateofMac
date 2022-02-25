// next / react & redux / styles / external libraries / images / components
import Link from "next/link";
import Image from "next/image";

import { useSelector } from "react-redux";

import styles from "../styles/card.module.scss";
import "react-loading-skeleton/dist/skeleton.css";

import moment from "moment";
import { motion } from "framer-motion";

import GameState from "./GameState";
import Skeleton from "react-loading-skeleton";

const Card = ({ game }) => {
  const skeleton = useSelector((state) => state.skeleton.value);

  return (
    <motion.div
      initial={{ opacity: 0, translateX: -500 }}
      animate={{
        translateX: 0,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2,
        },
      }}
      whileInView={{ opacity: 1, transition: { duration: 0.7 } }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.9 }}
    >
      <Link href={`/games/${game.title}`} passHref>
        <div className={styles.container}>
          <div className={styles.cardImgContainer}>
            {skeleton.loading ? (
              <Skeleton
                width={280}
                height={191}
                baseColor="#292929"
                highlightColor="#363636"
                className={styles.cardImg}
              />
            ) : (
              <Image
                src={game.wallpaper}
                width={374}
                height={221}
                className={styles.cardImg}
                alt={game.title}
              />
            )}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.7, staggerChildren: 0.5 },
            }}
            className={styles.cardContent}
          >
            <p className={styles.cardContentTitle}>
              {skeleton.loading ? (
                <Skeleton baseColor="#292929" highlightColor="#363636" />
              ) : (
                game.title
              )}
            </p>
            <p className={styles.cardContentUpdated}>
              {skeleton.loading ? (
                <Skeleton baseColor="#292929" highlightColor="#363636" />
              ) : (
                "Updated " + moment(game.updatedAt).format("ll")
              )}
            </p>
            <p className={styles.cardContentReports}>
              {skeleton.loading ? (
                <Skeleton baseColor="#292929" highlightColor="#363636" />
              ) : (
                "Reports " + game.reports
              )}
            </p>
            <GameState game={game.state} />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
