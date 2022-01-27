import "../styles/globals.scss";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import store from "../redux/store";
import { ContextProvider } from "../redux context/Context";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </Provider>
  );
}

export default MyApp;
