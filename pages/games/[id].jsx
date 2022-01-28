import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/games.module.scss";
import settingsIcon from "../../public/images/settings-icon.svg";
import infoIcon from "../../public/images/info-icon.svg";
import Comment from "../../components/Comment";
import { useSelector } from "react-redux";
import addIcon from "../../public/images/add-icon.svg";

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
  const id = context.params.id;
  const res = await fetch(`http://localhost:3001/api/games/${id}`);
  const res2 = await fetch(`http://localhost:3001/api/comments/${id}`);
  const data = await res.json();
  const data2 = await res2.json();

  return {
    props: {
      game: data,
      comments: data2,
    },
  };
};

const gamesName = ({ game, comments }) => {
  const user = useSelector((state) => state.user.value);
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
        {game.state === "Unknown" && (
          <p style={{ color: "#7E7E7E" }}>Hasn't been rated</p>
        )}
        {game.state === "Perfect" && (
          <p style={{ color: "#78BF58" }}>
            Runs perfectly, maybe need some tweaks
          </p>
        )}
        {game.state === "Playable" && (
          <p style={{ color: "#C98452" }}>
            Runs with some issues but overall a good experience
          </p>
        )}
        {game.state === "Unplayable" && (
          <p style={{ color: "#C95252" }}>
            Often crashes, won't start, too many issues
          </p>
        )}
      </div>
      <div className={styles.gamesCommentsContainer}>
        <div className={styles.gamesCommentsButtonsContainer}>
          <Link href={`${game.socialMedia}`}>
            <button className={styles.devsContactButton}>
              Social Media
              <span>
                <Image className={styles.iconColor} src={infoIcon} />
              </span>
            </button>
          </Link>
          <button className={styles.filterButton}>
            Filter
            <span>
              <Image className={styles.iconColor} src={settingsIcon} />
            </span>
          </button>
        </div>
        {user.user && (
          <div className={styles.addNewReport}>
            <h2>
              Add a New Report
              <span>
                <Image className={styles.addColor} src={addIcon} />
              </span>
            </h2>
          </div>
        )}
        {comments.comments.map((c, i) => (
          <Comment comment={c} key={i} />
        ))}
        {/* <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment /> */}
      </div>
    </div>
  );
};

export default gamesName;
