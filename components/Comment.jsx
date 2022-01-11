import styles from "../styles/comment.module.scss";
import logo from "../public/images/logo.png";
import Image from "next/image";

const Comment = () => {
  return (
    <>
      <div className={styles.gamesUser}>
        <div className={styles.gamesUserLogoContainer}>
          <Image src={logo} width={70} height={70} />
        </div>
        <div className={styles.gameUserInfo}>
          <p>Yerovy</p>
          <p className={styles.gamesReports}>250 reports</p>
        </div>
      </div>
      <div className={styles.gamesUserComments}>
        <p className={styles.gamesDate}>2 days ago</p>
        <p className={styles.gamesTitle}>
          Works flawlessly with Proton 6.3-8. My framerate is better than of
          that under Windows.
        </p>
        <p className={styles.gamesComment}>
          After some Tinkering with having issues with the Proton Experimental
          (White launcher screen) I have ended up uninstalling the game and
          reinstalling, setting the Proton version to the GE version before
          first launch and it worked. Here are my steps taken.
        </p>
        <p className={styles.gamesThrough}>● Crossover</p>
        <p className={styles.gamesScore}>● Perfect</p>
        <p className={styles.gamesPlatform}>● Steam Launcher</p>
        <p className={styles.gamesSelect}>● Single Player</p>
        <p className={styles.gamesMac}>● iMac Pro 32’’ M2 Pro 2022, 64GB</p>
      </div>
    </>
  );
};

export default Comment;
