// next / react & redux / styles / external libraries / images / components
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/userSlice";

import styles from "../styles/login.module.scss";

import axios from "axios";

const Login = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const useUserRef = useRef();
  const usePasswordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(userLogin({ user: null, isFetching: true, error: false }));
    try {
      const res = await axios.post(`${process.env.API_URL}api/auth/login`, {
        username: useUserRef.current.value,
        password: usePasswordRef.current.value,
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
              ref={useUserRef}
              required
            />
            <input
              className={styles.loginInput}
              type="password"
              placeholder="Password"
              ref={usePasswordRef}
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
          <Link href={"/register"}>
            Register if you don&apos;t have an account.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
