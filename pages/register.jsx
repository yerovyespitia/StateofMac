import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/register.module.scss";
import Router from "next/router";

const register = () => {
  const user = useSelector((state) => state.user.value);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(`${process.env.API_URL}api/auth/register`, {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    user.user && Router.push("/");
  }, []);
  return (
    <div>
      <Head>
        <title>Register | State of Mac</title>
      </Head>
      <div className={styles.register}>
        <h1>Register</h1>
        <div className={styles.registerForm}>
          <form className={styles.registerForm} onSubmit={handleSubmit}>
            <input
              className={styles.registerInput}
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              className={styles.registerInput}
              type={"email"}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className={styles.registerInput}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className={styles.registerButton} type="submit">
              Register
            </button>
          </form>
        </div>
        {error && <span className={styles.error}>Something must be wrong</span>}
      </div>
    </div>
  );
};

export default register;
