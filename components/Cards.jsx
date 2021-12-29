import Card from "./Card";
import styles from "../styles/cards.module.scss";

const Cards = () => {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardsFilterButton}>
        <button>Recently Added</button>
        <button className={styles.cardsActive}>Lack Reports</button>
        <button className={styles.cardsActive}>More Populars</button>
        <button className={styles.cardsActive}>Better Rated</button>
        <button className={styles.cardsActive}>Worst Rated</button>
      </div>
      <Card />
      <Card />
      <Card />
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
