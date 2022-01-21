import Head from "next/head";
import Link from "next/link";
import styles from "../styles/login.module.scss";

const login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Head>
        <title>Login | State of Mac</title>
      </Head>
      <div className={styles.login}>
        <h1>State of Mac</h1>
        <div className={styles.loginForm}>
          <form className={styles.loginForm} onSubmit={handleSubmit}>
            <input
              className={styles.loginInput}
              type="text"
              placeholder="Username"
              required
            />
            <input
              className={styles.loginInput}
              type="password"
              placeholder="Password"
              required
            />
            <button className={styles.loginButton}>Login</button>
          </form>
        </div>
        <div className={styles.register}>
          <Link href={"/register"}>Register if you don't have an account.</Link>
        </div>
      </div>
    </div>
  );
};

export default login;
