import Head from "next/head"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Navbar />
      <>{children}</>
    </>
  )
}

export default Layout
