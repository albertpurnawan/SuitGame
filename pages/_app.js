import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/header.css";
import "../styles/login.css";
import "../styles/user.css";
import Reducers from "../redux/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  const store = createStore(Reducers);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
