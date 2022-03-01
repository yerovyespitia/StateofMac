// next / react & redux / styles / external libraries / images / components
import Head from "next/head";

import { useEffect } from "react";
import { useSelector } from "react-redux";

import Cards from "../components/Cards";

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

// export const getServerSideProps = async (context) => {
//   const { page = 0, limit = 15, searchGame = "" } = context.query;
//   const res = await fetch(`${process.env.API_URL}api/games?page=1&limit=15`);
//   const games = await res.json();

//   return {
//     props: {
//       games,
//       page,
//       limit,
//       searchGame,
//     },
//   };
// };
