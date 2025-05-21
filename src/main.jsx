import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store } from "./lib/redux-toolkit/store.js";
import AddModal from "./components/AddModal.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <App />
      <AddModal />
    </Provider>
    <Toaster position="top-right" richColors />
  </>
);

