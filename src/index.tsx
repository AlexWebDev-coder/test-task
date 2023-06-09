import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import ToastConfigContainer from "./components/toast-config";
import { store } from "./store";
import App from "./_app";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <Provider store={store}>
      <ToastConfigContainer />
      <App />
    </Provider>
  </Router>
);
