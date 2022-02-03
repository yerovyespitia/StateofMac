import styles from "../styles/comment.module.scss";
import moment from "moment";

const Comment = ({ comment }) => {
  return (
    <>
      <div className={styles.comment}>
        <div className={styles.commentUser}>
          <div className={styles.commentUserLeft}>
            <p className={styles.author}>
              {comment.comment.username}
              {/* <span className={styles.authorReports}> → 250 reports</span> */}
            </p>
          </div>
          <div className={styles.commentUserRight}>
            <p className={styles.commentDate}>
              {moment(comment.comment.date).format("ll")}
            </p>
          </div>
        </div>
        <p className={styles.commentTitle}>{comment.comment.title}</p>
        <p className={styles.commentDescription}>
          {comment.comment.description}
        </p>
        <div className={styles.commentInfo}>
          <p className={styles.commentRunThrough}>
            ● {comment.comment.runThrough}
          </p>
          <p className={styles.commentScore}>● {comment.comment.state}</p>
          <p className={styles.commentPlatform}>● {comment.comment.launcher}</p>
          <p className={styles.commentMac}>● {comment.comment.macUsed}</p>
        </div>
      </div>
    </>
  );
};

export default Comment;
