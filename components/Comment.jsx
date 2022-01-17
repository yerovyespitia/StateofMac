import styles from "../styles/comment.module.scss";

const Comment = () => {
  return (
    <>
      <div className={styles.comment}>
        <div className={styles.commentUser}>
          <p className={styles.author}>Yerovy</p>
          <p className={styles.authorReports}>250 reports</p>
        </div>
        <p className={styles.commentDate}>2 days ago</p>
        <p className={styles.commentTitle}>
          Works flawlessly with Proton 6.3-8. My framerate is better than of
          that under Windows.
        </p>
        <p className={styles.commentDescription}>
          After some Tinkering with having issues with the Proton Experimental
          (White launcher screen) I have ended up uninstalling the game and
          reinstalling, setting the Proton version to the GE version before
          first launch and it worked. Here are my steps taken.
        </p>
        <div className={styles.commentInfo}>
          <p className={styles.commentPlayedThrough}>● Crossover</p>
          <p className={styles.commentScore}>● Perfect</p>
          <p className={styles.commentPlatform}>● Steam Launcher</p>
          <p className={styles.commentSelect}>● Single Player</p>
          <p className={styles.commentMac}>● iMac Pro 32’’ M2 Pro 2022, 64GB</p>
        </div>
      </div>
    </>
  );
};

export default Comment;
