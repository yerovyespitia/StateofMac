import Link from "next/link";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Context } from "../redux context/Context";
import { search } from "../redux/gamesSlice";
import styles from "../styles/navbar.module.scss";

const Navbar = () => {
  const games = useSelector((state) => state.games.value);
  const { user, dispatch } = useContext(Context);
  // const dispatch = useDispatch();
  const handleOnChange = (e) => {
    dispatch(search({ searchGame: e.target.value }));
  };
  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarButton}>
        <Link href={"/"}>
          <button>Home</button>
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
      {!user && (
        <div className={styles.navbarButton}>
          <Link href={"/login"}>
            <button>Login</button>
          </Link>
        </div>
      )}
      {user && (
        <div className={styles.navbarButton}>
          <button onClick={handleLogOut}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
