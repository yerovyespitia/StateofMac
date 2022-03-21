import styles from "../styles/welcomeuser.module.scss";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const WelcomeUser = () => {
  const user = useSelector((state) => state.user.value);

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, transition: { duration: 5 } }}
    >
      <p>
        Welcome back <span className={styles.user}>{user.user.username}!</span>
      </p>
    </motion.div>
  );
};

export default WelcomeUser;
