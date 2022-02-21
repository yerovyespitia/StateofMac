// next / react & redux / styles / external libraries / images / components
import styles from "../styles/gamestate.module.scss";

const GameState = (props) => {
  return (
    <>
      {props.game === "Unknown" && (
        <p className={styles.gameState} id={styles.unknown}>
          Hasn&apos;t been rated
        </p>
      )}
      {props.game === "Perfect" && (
        <p className={styles.gameState} id={styles.perfect}>
          Runs perfectly, maybe need some tweaks
        </p>
      )}
      {props.game === "Playable" && (
        <p className={styles.gameState} id={styles.playable}>
          Runs with some issues but overall a good experience
        </p>
      )}
      {props.game === "Unplayable" && (
        <p className={styles.gameState} id={styles.unplayable}>
          Often crashes, it doesn&apos;t start, too many issues
        </p>
      )}
      {props.game === "Tied" && (
        <p className={styles.gameState} id={styles.tied}>
          There&apos;re mixed opinions about the perfomance
        </p>
      )}
    </>
  );
};

export default GameState;
