import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/games.module.scss";
import settingsIcon from "../../public/images/settings-icon.png";
import infoIcon from "../../public/images/info-icon.png";
import Comment from "../../components/Comment";

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3001/api/games/`);
  const data = await res.json();
  const paths = data.map((id) => {
    return {
      params: { id: id.title.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch(`http://localhost:3001/api/games/${id}`)
  const data = await res.json()
  
  return {
    props: {
      game: data
    }
  }
}

const gamesName = ({game}) => {
  return (
    <div className={styles.gamesContainer}>
      <Head>
        <title>{game.title} | State of Mac</title>
      </Head>
      <div className={styles.gamesImgContainer}>
        <Image
          src={game.wallpaper}
          width={1454}
          height={813}
          className={styles.gamesImg}
        />
      </div>
      <div className={styles.gamesContactContainer}>
        <h1>{game.title}</h1>
        {game.state === "Unknown" && <p>Hasn’t been rated</p>}
      </div>
      <div className={styles.gamesCommentsContainer}>
        <div className={styles.gamesCommentsButtonsContainer}>
          <Link href={`${game.socialMedia}`}>
            <button className={styles.devsContactButton}>
              Social Media
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
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default gamesName;
