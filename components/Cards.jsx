import Card from "./Card";
import styles from "../styles/cards.module.scss";
import Image from "next/image";
import expand from "../public/images/expand.png";

const Cards = () => {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardsFilterButton}>
        <button>Recently Added</button>
      </div>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Cards;
