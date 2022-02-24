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
    <motion.div
      initial={{ translateX: -100 }}
      animate={{ translateX: 0, transition: { duration: 0.5 } }}
      className={styles.navbar}
    >
      <div className={styles.navbarButton}>
        <Link href={"/"} passHref>
          <button onClick={handleOnClick}>Home</button>
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
          <button onClick={handleLogOut} suppressHydrationWarning={true}>
            Logout
          </button>
        </div>
      ) : (
        <div className={styles.navbarButton}>
          <Link href={"/login"} passHref>
            <button onClick={handleOnClick} suppressHydrationWarning={true}>
              Login
            </button>
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;
