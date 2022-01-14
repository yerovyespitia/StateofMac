import Link from "next/link";
import styles from "../styles/navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarButton}>
        <Link href={"/"}>
          <button>Home</button>
        </Link>
      </div>
      <div className={styles.navbarSearchBarContainer}>
        <input type="text" name="search" placeholder="Search games" />
      </div>
      <div className={styles.navbarButton}>
        <Link href={"/login"}>
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
