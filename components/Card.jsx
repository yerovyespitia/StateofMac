import styles from "../styles/card.module.scss";
import Image from "next/image";
import img from "../public/images/img.png";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardImgContainer}>
        <Image src={img} width={374} height={218}/>
      </div>
      <div className={styles.cardContent}>
        <p className={styles.cardContentTitle}>Cyberpunk 2077</p>
        <p className={styles.cardContentUpdated}>Updated November 2, 2021</p>
        <p className={styles.cardContentReports}>250 reports</p>
        <p className={styles.cardContentScore}>Perfect</p>
      </div>
    </div>
  );
};

export default Card;
