import Head from "next/head";
import Cards from "../components/Cards";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const user = useSelector((state) => state.user.value);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user.user));
  }, [user]);

  return (
    <div>
      <Head>
        <title>State of Mac</title>
      </Head>
      <Cards />
    </div>
  );
}
