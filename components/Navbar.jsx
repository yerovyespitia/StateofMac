// next / react & redux / styles / external libraries / images / components
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { search } from "../redux/gamesSlice";
import { userLogin } from "../redux/userSlice";

import styles from "../styles/navbar.module.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  const games = useSelector((state) => state.games.value);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    dispatch(search({ searchGame: e.target.value }));
  };

  const handleLogOut = () => {
    dispatch(
      userLogin({ user: null, isFetching: false, error: false, login: false })
    );
  };

  const handleOnClick = () => {
    dispatch(search({ searchGame: "" }));
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.navbar}
    >
      <div className={styles.navbarButton}>
        <Link href={"/"} passHref>
          <motion.button whileTap={{ scale: 0.9 }} onClick={handleOnClick}>
            Home
          </motion.button>
        </Link>
      </div>
      <div className={styles.navbarSearchBarContainer}>
        <input
          type="text"
          name="search"
          placeholder="Search games"
          value={games.searchGame}
          onChange={handleOnChange}
        />
      </div>
      {user.user ? (
        <div className={styles.navbarButton}>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleLogOut}
            suppressHydrationWarning={true}
          >
            Logout
          </motion.button>
        </div>
      ) : (
        <div className={styles.navbarButton}>
          <Link href={"/login"} passHref>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleOnClick}
              suppressHydrationWarning={true}
            >
              Login
            </motion.button>
          </Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
