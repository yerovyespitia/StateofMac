import { useRouter } from "next/router";
import styles from "../../styles/games.module.scss";
import Image from "next/image";
import wallpaper from "../../public/images/wallpaper.png";
import Head from "next/head";
import infoIcon from "../../public/images/info-icon.png";
import settingsIcon from "../../public/images/settings-icon.png";
import Link from "next/link";
import Comment from "../../components/Comment";

const gamesName = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.gamesContainer}>
      <Head>
        <title>{id} | State of Gaming on Mac</title>
      </Head>
      <div className={styles.gamesImgContainer}>
        <Image src={wallpaper} />
      </div>
      <div className={styles.gamesContactContainer}>
        <h1>{id}</h1>
        <p>Runs perfectly, maybe need some tweaks</p>
      </div>
      <div className={styles.gamesCommentsContainer}>
        <div className={styles.gamesCommentsButtonsContainer}>
          <Link href={"/contact/Cyberpunk 2077"}>
            <button className={styles.devsContactButton}>
              Devs Contact
              <span>
                <Image src={infoIcon} />
              </span>
            </button>
          </Link>
          <button className={styles.filterButton}>
            Filter
            <span>
              <Image src={settingsIcon} />
            </span>
          </button>
        </div>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default gamesName;
