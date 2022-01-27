import Head from "next/head";
import Link from "next/link";
import styles from "../styles/login.module.scss";
import axios from "axios";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/userSlice";
import Router from 'next/router'

const login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(userLogin({ user: null, isFetching: true, error: false }));
    try {
      const res = await axios.post("http://localhost:3001/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch(userLogin({ user: res.data, isFetching: false, error: false }));
      Router.push('/')
    } catch (error) {
      dispatch(userLogin({ user: null, isFetching: false, error: true }));
      console.log(error);
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
