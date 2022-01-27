import Link from "next/link";
import styles from "../styles/navbar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../redux/gamesSlice";
import { userLogin } from "../redux/userSlice";

const Navbar = () => {
  const games = useSelector((state) => state.games.value);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    dispatch(search({ searchGame: e.target.value }));
  };
  const handleLogOut = () => {
    dispatch(userLogin({ user: null, isFetching: false, error: false }));
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
      {user.user ? (
        <div className={styles.navbarButton}>
          <button onClick={handleLogOut} suppressHydrationWarning={true}>Logout</button>
        </div>
      ) : (
        <div className={styles.navbarButton}>
          <Link href={"/login"}>
            <button suppressHydrationWarning={true}>Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
