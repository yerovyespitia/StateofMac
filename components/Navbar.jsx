import Link from "next/link";
import styles from "../styles/navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLogoContainer}>
        <Link href={"/"}>
          <h1 className={styles.navbarLogo}>
            State of <br className={styles.breakLine} />
            gaming on Mac
          </h1>
        </Link>
      </div>
      <div className={styles.navbarSearchBarContainer}>
        <input type="text" name="search" placeholder="Search games" />
      </div>
      <div className={styles.navbarSignIn}>
        <Link href={"/signin"}>
          <button>Sign In</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
