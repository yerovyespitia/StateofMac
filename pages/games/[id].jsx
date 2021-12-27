import { useRouter } from "next/router";
import styles from "../../styles/games.module.scss";
import Image from "next/image";
import wallpaper from "../../public/images/wallpaper.png";
import Head from "next/head";
import infoIcon from "../../public/images/info-icon.png";
import settingsIcon from "../../public/images/settings-icon.png";
import logo from "../../public/images/logo.png";
import Link from "next/link";

const gamesName = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.gamesContainer}>
      <Head>
        <title>{id} | State of Gaming on Mac</title>
      </Head>
      <div className={styles.gamesImgContainer}>
        <Image src={wallpaper} />
      </div>
      <div className={styles.gamesContactContainer}>
        <h1>{id}</h1>
        <p>Most of the community thinks the game performance is perfect</p>
      </div>
      <div className={styles.gamesCommentsContainer}>
        <div className={styles.gamesCommentsButtonsContainer}>
          <Link href={"/contact/Cyberpunk 2077"}>
            <button className={styles.devsContactButton}>
              Devs Contact
              <span>
                <Image src={infoIcon} />
              </span>
            </button>
          </Link>
          <button className={styles.filterButton}>
            Filter
            <span>
              <Image src={settingsIcon} />
            </span>
          </button>
        </div>
        <div className={styles.gamesUser}>
          <div className={styles.gamesUserLogoContainer}>
            <Image src={logo} width={70} height={70} />
          </div>
          <div className={styles.gameUserInfo}>
            <p>Yerovy</p>
            <p className={styles.gamesReports}>250 reports</p>
          </div>
        </div>
        <div className={styles.gamesUserComments}>
          <p className={styles.gamesDate}>2 days ago</p>
          <p className={styles.gamesTitle}>
            Works flawlessly with Proton 6.3-8. My framerate is better than of
            that under Windows.
          </p>
          <p className={styles.gamesComment}>
            After some Tinkering with having issues with the Proton Experimental
            (White launcher screen) I have ended up uninstalling the game and
            reinstalling, setting the Proton version to the GE version before
            first launch and it worked. Here are my steps taken.
          </p>
          <p className={styles.gamesThrough}>● Crossover</p>
          <p className={styles.gamesScore}>● Perfect</p>
          <p className={styles.gamesPlatform}>● Steam Launcher</p>
          <p className={styles.gamesMac}>● iMac Pro 32’’ M2 Pro 2022, 64GB</p>
        </div>
        <div className={styles.gamesUser}>
          <div className={styles.gamesUserLogoContainer}>
            <Image src={logo} width={70} height={70} />
          </div>
          <div className={styles.gameUserInfo}>
            <p>Yerovy</p>
            <p className={styles.gamesReports}>250 reports</p>
          </div>
        </div>
        <div className={styles.gamesUserComments}>
          <p className={styles.gamesDate}>2 days ago</p>
          <p className={styles.gamesTitle}>
            Works flawlessly with Proton 6.3-8. My framerate is better than of
            that under Windows.
          </p>
          <p className={styles.gamesComment}>
            After some Tinkering with having issues with the Proton Experimental
            (White launcher screen) I have ended up uninstalling the game and
            reinstalling, setting the Proton version to the GE version before
            first launch and it worked. Here are my steps taken.
          </p>
          <p className={styles.gamesThrough}>● Crossover</p>
          <p className={styles.gamesScore}>● Perfect</p>
          <p className={styles.gamesPlatform}>● Steam Launcher</p>
          <p className={styles.gamesMac}>● iMac Pro 32’’ M2 Pro 2022, 64GB</p>
        </div>
        <div className={styles.gamesUser}>
          <div className={styles.gamesUserLogoContainer}>
            <Image src={logo} width={70} height={70} />
          </div>
          <div className={styles.gameUserInfo}>
            <p>Yerovy</p>
            <p className={styles.gamesReports}>250 reports</p>
          </div>
        </div>
        <div className={styles.gamesUserComments}>
          <p className={styles.gamesDate}>2 days ago</p>
          <p className={styles.gamesTitle}>
            Works flawlessly with Proton 6.3-8. My framerate is better than of
            that under Windows.
          </p>
          <p className={styles.gamesComment}>
            After some Tinkering with having issues with the Proton Experimental
            (White launcher screen) I have ended up uninstalling the game and
            reinstalling, setting the Proton version to the GE version before
            first launch and it worked. Here are my steps taken.
          </p>
          <p className={styles.gamesThrough}>● Crossover</p>
          <p className={styles.gamesScore}>● Perfect</p>
          <p className={styles.gamesPlatform}>● Steam Launcher</p>
          <p className={styles.gamesMac}>● iMac Pro 32’’ M2 Pro 2022, 64GB</p>
        </div>
        <div className={styles.gamesUser}>
          <div className={styles.gamesUserLogoContainer}>
            <Image src={logo} width={70} height={70} />
          </div>
          <div className={styles.gameUserInfo}>
            <p>Yerovy</p>
            <p className={styles.gamesReports}>250 reports</p>
          </div>
        </div>
        <div className={styles.gamesUserComments}>
          <p className={styles.gamesDate}>2 days ago</p>
          <p className={styles.gamesTitle}>
            Works flawlessly with Proton 6.3-8. My framerate is better than of
            that under Windows.
          </p>
          <p className={styles.gamesComment}>
            After some Tinkering with having issues with the Proton Experimental
            (White launcher screen) I have ended up uninstalling the game and
            reinstalling, setting the Proton version to the GE version before
            first launch and it worked. Here are my steps taken.
          </p>
          <p className={styles.gamesThrough}>● Crossover</p>
          <p className={styles.gamesScore}>● Perfect</p>
          <p className={styles.gamesPlatform}>● Steam Launcher</p>
          <p className={styles.gamesMac}>● iMac Pro 32’’ M2 Pro 2022, 64GB</p>
        </div>
        <div className={styles.gamesUser}>
          <div className={styles.gamesUserLogoContainer}>
            <Image src={logo} width={70} height={70} />
          </div>
          <div className={styles.gameUserInfo}>
            <p>Yerovy</p>
            <p className={styles.gamesReports}>250 reports</p>
          </div>
        </div>
        <div className={styles.gamesUserComments}>
          <p className={styles.gamesDate}>2 days ago</p>
          <p className={styles.gamesTitle}>
            Works flawlessly with Proton 6.3-8. My framerate is better than of
            that under Windows.
          </p>
          <p className={styles.gamesComment}>
            After some Tinkering with having issues with the Proton Experimental
            (White launcher screen) I have ended up uninstalling the game and
            reinstalling, setting the Proton version to the GE version before
            first launch and it worked. Here are my steps taken.
          </p>
          <p className={styles.gamesThrough}>● Crossover</p>
          <p className={styles.gamesScore}>● Perfect</p>
          <p className={styles.gamesPlatform}>● Steam Launcher</p>
          <p className={styles.gamesMac}>● iMac Pro 32’’ M2 Pro 2022, 64GB</p>
        </div>
      </div>
    </div>
  );
};

export default gamesName;
