import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import styles from "../styles/register.module.scss";

const register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http://localhost:3001/api/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div>
      <Head>
        <title>Register | State of Mac</title>
      </Head>
      <div className={styles.register}>
        <h1>State of Mac</h1>
        <div className={styles.registerJoin}>
          <p>
            Join us today and help us to create the biggest mac gaming community
            around the world
          </p>
        </div>
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
        {error && (
          <span className={styles.error}>
            Something went wrong. Please try again.
          </span>
        )}
      </div>
    </div>
  );
};

export default register;
