import Script from "next/script"
import { useRouter } from "next/router"
import { DefaultSeo } from "next-seo"
import { useEffect } from "react"
import "../styles/globals.css"
import * as gtag from "../lib/gtag"
import Layout from "../components/Layout"

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <DefaultSeo
        title={"State of Mac"}
        description={`Find out if your favorite game runs on Apple Silicon.`}
        openGraph={{
          title: "State of Mac",
          description:
            "Discover if your favorite games run on your Mac and the find out the best way to run them.",
          site_name: "State of Mac",
          images: [
            {
              url: "https://res.cloudinary.com/duyusab1p/image/upload/v1647977915/opengraph_wdmvoz.png",
              width: 1200,
              height: 630,
              alt: "Og Image",
              type: "image/png",
            },
          ],
        }}
        twitter={{
          handle: "@yerovyespitia",
          cardType: "summary_large_image",
        }}
      />

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
