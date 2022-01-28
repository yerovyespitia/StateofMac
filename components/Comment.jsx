import styles from "../styles/comment.module.scss";
import moment from "moment";

const Comment = ({ comment }) => {
  return (
    <>
      <div className={styles.comment}>
        <div className={styles.commentUser}>
          <div className={styles.commentUserLeft}>
            <p className={styles.author}>
              {comment.username}{" "}
              <span className={styles.authorReports}>→ 250 reports</span>
            </p>
          </div>
          <div className={styles.commentUserRight}>
            <p className={styles.commentDate}>
              {moment(comment.createdAt).format("l")}
            </p>
          </div>
        </div>
        <p className={styles.commentTitle}>{comment.title}</p>
        <p className={styles.commentDescription}>{comment.description}</p>
        <div className={styles.commentInfo}>
          <p className={styles.commentPlayedThrough}>
            ● {comment.playedThrough}
          </p>
          <p className={styles.commentScore}>● {comment.state}</p>
          <p className={styles.commentPlatform}>● {comment.launcher}</p>
          <p className={styles.commentMac}>● {comment.macUsed}</p>
        </div>
      </div>
    </>
  );
};

export default Comment;
