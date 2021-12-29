import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../../styles/contact.module.scss";
import twitter from "../../public/images/twtt.png";
import Head from "next/head";

const contactGame = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.contactGame}>
      <Head>
        <title>Devs Contact of {id} | State of Gaming on Mac</title>
      </Head>
      <div className={styles.contactGameTitle}>
        <h1>
          Devs Contact <br /> for {id}
        </h1>
      </div>
      <div className={styles.contactGameInfoContainer}>
        <div className={styles.contactGameInfoCard}>
          <span className={styles.contactGameInfoLogo}>
            <Image src={twitter}></Image>
          </span>
          Official Account
        </div>
        <div className={styles.contactGameInfoCard}>
          <span className={styles.contactGameInfoLogo}>
            <Image src={twitter}></Image>
          </span>
          Game Developer
        </div>
        <div className={styles.contactGameInfoCard}>
          <span className={styles.contactGameInfoLogo}>
            <Image src={twitter}></Image>
          </span>
          Game Publisher
        </div>
        <div className={styles.contactGameInfoCard}>
          <span className={styles.contactGameInfoLogo}>
            <Image src={twitter}></Image>
          </span>
          Game Programmer
        </div>
      </div>
    </div>
  );
};

export default contactGame;
