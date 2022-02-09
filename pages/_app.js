import "../styles/globals.scss";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ID}`}
      />
      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', '${process.env.GOOGLE_ID}');
                `}
      </Script>
    </Provider>
  );
}

export default MyApp;
