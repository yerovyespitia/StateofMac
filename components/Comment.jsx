import styles from "../styles/comment.module.scss";
import moment from "moment";
import { motion } from "framer-motion";

const Comment = ({ comment }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        className={styles.comment}
      >
        <div className={styles.commentUser}>
          <div className={styles.commentUserLeft}>
            <p className={styles.author}>
              {comment.comment.username}
              {/* <span className={styles.authorReports}> → 250 reports</span> */}
            </p>
          </div>
          <div className={styles.commentUserRight}>
            <time className={styles.commentDate}>
              {moment(comment.comment.date).format("ll")}
            </time>
          </div>
        </div>
        <p className={styles.commentTitle}>{comment.comment.title}</p>
        <article className={styles.commentDescription}>
          {comment.comment.description}
        </article>
        <article className={styles.commentInfo}>
          <p className={styles.commentRunThrough}>
            ● {comment.comment.runThrough}
          </p>
          <p className={styles.commentScore}>● {comment.comment.state}</p>
          <p className={styles.commentPlatform}>● {comment.comment.launcher}</p>
          <p className={styles.commentMac}>● {comment.comment.macUsed}</p>
        </article>
      </motion.div>
    </>
  );
};

export default Comment;
