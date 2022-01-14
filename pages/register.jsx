import Head from "next/head";
import styles from "../styles/register.module.scss";

const register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
            />
            <input
              className={styles.registerInput}
              type={"email"}
              placeholder="Email"
            />
            <input
              className={styles.registerInput}
              type="password"
              placeholder="Password"
            />
            <button className={styles.registerButton}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default register;
