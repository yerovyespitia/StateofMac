import Head from "next/head";
import styles from "../styles/signin.module.scss";

const signin = () => {
  return (
    <div>
      <Head>
        <title>Sign in | State of Mac</title>
      </Head>
      <div className={styles.signin}>
        <h1>State of Mac</h1>
        <div className={styles.signinJoin}>
          <p>
            Join us today and help us to create the biggest Mac gaming community
            around the world
          </p>
        </div>
        <button>
          <span className={styles.logo}></span> Sign in with Apple
        </button>
      </div>
    </div>
  );
};

export default signin;
