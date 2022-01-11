import Head from "next/head";
import Cards from "../components/Cards";

export default function Home() {
  return (
    <div>
      <Head>
        <title>State of Mac</title>
      </Head>
      <Cards />
    </div>
  );
}
