import Script from "next/script";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/globals.scss";
import * as gtag from "../lib/gtag";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <DefaultSeo
        title={"State of Mac"}
        description={`Find if favorite game runs on Apple Silicon.`}
        openGraph={{
          title: "State of Mac",
          description: "Find the best way to run your favorite game on Mac.",
          site_name: "State of Mac",
        }}
        twitter={{
          handle: "@yerovyespitia",
          cardType: "summary_large_image",
        }}
      />
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
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
