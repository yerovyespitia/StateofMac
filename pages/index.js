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
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ID}`}
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-KZXPSVLTTL');
        </script>
      </Head>
      <Cards />
    </div>
  );
}
