import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Find if your favorite game is able to run on Mac and the best way to run it"
        />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
