import Card from "./Card";
import styles from "../styles/cards.module.scss";

const Cards = () => {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardsFilterButton}>
        <button>Recently Added</button>
      </div>
      <div className={styles.cardFilterButtonOption}>
        <ul>
          <li className={styles.cardFilterButtonOptions}>first option</li>
          <li className={styles.cardFilterButtonOptions}>second option</li>
          <li className={styles.cardFilterButtonOptions}>third option</li>
          <li className={styles.cardFilterButtonOptions}>fourth option</li>
          <li className={styles.cardFilterButtonOptions}>fifth option</li>
        </ul>
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
