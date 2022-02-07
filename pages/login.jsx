import Head from "next/head";
import Link from "next/link";
import styles from "../styles/login.module.scss";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/userSlice";
import Router from "next/router";
import axios from "axios";

const login = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const userRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(userLogin({ user: null, isFetching: true, error: false }));
    try {
      const res = await axios.post(`${process.env.API_URL}api/auth/login`, {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch(
        userLogin({
          user: res.data,
          isFetching: false,
          error: false,
          login: true,
        })
      );
      res.data && Router.push("/");
    } catch (error) {
      dispatch(
        userLogin({ user: null, isFetching: false, error: true, login: false })
      );
    }
  };

  useEffect(() => {
    user.user && Router.push("/");
  }, []);

  return (
    <div>
      <Head>
        <title>Login | State of Mac</title>
      </Head>
      <div className={styles.login}>
        <h1>Login</h1>
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
              disabled={user.isFetching}
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
