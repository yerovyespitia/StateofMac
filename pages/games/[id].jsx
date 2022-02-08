import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/games.module.scss";
// import settingsIcon from "../../public/images/settings-icon.svg";
import Comment from "../../components/Comment";
import { useSelector } from "react-redux";
import addIcon from "../../public/images/add-icon.svg";
import { useState } from "react";
import axios from "axios";
import GameState from "../../components/GameState";
import { useRouter } from 'next/router'

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}api/games?page=1&limit=0`);
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
  const [res, res2] = await Promise.all([
    fetch(`${process.env.API_URL}api/games/${id}`),
    fetch(`${process.env.API_URL}api/comments/${id}?page=1&limit=25`),
  ]);
  const [data, data2] = await Promise.all([
    res.json(),
    res2.json()
  ])

  return {
    props: {
      game: data,
      comments: data2,
    },
  };
};

const GameName = ({ game, comments }) => {
  const router = useRouter()
  const { id } = router.query
  const user = useSelector((state) => state.user.value);
  const [addReportActive, setAddReportActive] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [runThrough, setRunThrough] = useState("");
  const [state, setState] = useState("");
  const [launcher, setLauncher] = useState("");
  const [macUsed, setMacUsed] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      username: user.user.username,
      title,
      description,
      runThrough,
      state,
      launcher,
      macUsed,
    };
    try {
      axios.post(
        `${process.env.API_URL}api/comments/${game.title}`,
        newComment
      );
      setAddReportActive(!addReportActive);
      window.location.replace("/");
    } catch (error) {}
  };

  const handleCancel = () => {
    setAddReportActive(!addReportActive);
    setTitle("");
    setDescription("");
    setRunThrough("");
    setState("");
    setLauncher("");
    setMacUsed("");
  };

  return (
    <div className={styles.gamesContainer}>
      <Head>
        <title>{id} | State of Mac</title>
      </Head>
      <div className={styles.gamesImgContainer}>
        <Image
          src={game.wallpaper}
          width={1454}
          height={813}
          className={styles.gamesImg}
          alt="wallpaper"
        />
      </div>
      <div className={styles.gamesContactContainer}>
        <h1>{game.title}</h1>
        <GameState game={game.state} />
      </div>
      <div className={styles.gamesCommentsContainer}>
        {/* <div className={styles.gamesCommentsButtonsContainer}>
          <button className={styles.filterButton}>
            Filter
            <span>
              <Image className={styles.iconColor} src={settingsIcon} />
            </span>
          </button>
        </div> */}
        {user.user && (
          <div
            className={styles.addNewReportButton}
            onClick={() => setAddReportActive(!addReportActive)}
          >
            <h2>
              Add a New Report
              <span>
                <Image
                  className={styles.addColor}
                  src={addIcon}
                  alt="add icon"
                />
              </span>
            </h2>
          </div>
        )}
        {addReportActive && (
          <form className={styles.addNewReport} onSubmit={handleSubmit}>
            <div className={styles.addNewReportTitle}>
              <input
                type="text"
                name="search"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className={styles.addNewReportOptions}>
              <select onChange={(e) => setRunThrough(e.target.value)}>
                <option
                  value=""
                  disabled
                  selected="true"
                  defaultValue={"Game Run Through"}
                >
                  Game Run Through
                </option>
                <option value="A Native Port">A Native Port</option>
                <option value="Rosetta 2">Rosetta 2</option>
                <option value="Crossover">Crossover</option>
                <option value="Parallels">Parallels</option>
                <option value="VMware">VMware</option>
                <option value="PlayCover">PlayCover</option>
                <option value="A Console Emulator">A Console Emulator</option>
                <option value="Other">Other</option>
              </select>
              <select onChange={(e) => setState(e.target.value)}>
                <option
                  value=""
                  disabled
                  selected="true"
                  defaultValue={"State of the Game"}
                >
                  State of the Game
                </option>
                <option value="Perfect">Perfect</option>
                <option value="Playable">Playable</option>
                <option value="Unplayable">Unplayable</option>
              </select>
              <select onChange={(e) => setLauncher(e.target.value)}>
                <option
                  value=""
                  disabled
                  selected="true"
                  defaultValue={"Launcher"}
                >
                  Launcher
                </option>
                <option value="Steam Launcher">Steam Launcher</option>
                <option value="Epic Games Launcher">Epic Games Launcher</option>
                <option value="Rockstar Games Launcher">
                  Rockstar Games Launcher
                </option>
                <option value="Riot Client">Riot Client</option>
                <option value="Battle.net">Battle.net</option>
                <option value="Other">Other</option>
                <option value="None">None</option>
              </select>
              <select onChange={(e) => setMacUsed(e.target.value)}>
                <option value="" disabled selected="true" defaultValue={"Mac"}>
                  Mac
                </option>
                <option value="MacBook Pro M1 2020">MacBook Pro M1 2020</option>
                <option value="MacBook Air M1 2020">MacBook Air M1 2020</option>
                <option value="Mac mini M1 2020">Mac mini M1 2020</option>
                <option value="iMac M1 2021">iMac M1 2021</option>
                <option value="MacBook Pro M1 Pro 2021">
                  MacBook Pro M1 Pro 2021
                </option>
                <option value="MacBook Pro M1 Max 2021">
                  MacBook Max M1 Pro 2021
                </option>
              </select>
            </div>
            <div className={styles.addNewReportDescription}>
              <textarea
                name="description"
                id="textarea"
                cols="30"
                rows="10"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className={styles.addNewReportOptionButton}>
              <button type="submit">Send</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        )}
        {comments[0].comment &&
          comments.map((c, i) => <Comment comment={c} key={i} />)}
      </div>
    </div>
  );
};

export default GameName;
