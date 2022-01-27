import Head from "next/head";
import Link from "next/link";
import styles from "../styles/login.module.scss";
import axios from "axios";
import { useRef, useContext } from "react";
import { Context } from "../redux context/Context";

const login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:3001/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && window.location.replace("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
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
              ref={userRef}
              required
            />
            <input
              className={styles.loginInput}
              type="password"
              placeholder="Password"
              ref={passwordRef}
              required
            />
            <button
              className={styles.loginButton}
              type="submit"
              disabled={isFetching}
            >
              Login
            </button>
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
