import { StrictMode, createContext } from "react";
import todosStore from "./todosMobx";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";
import { todosSlice } from "./todosSlice.js";
import { loadingSlice } from "./loadingSlice.js";
// import { RecoilRoot } from "recoil";

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    loading: loadingSlice.reducer,
  },
});

const TodosStoreContext = createContext(todosStore);

// Better not to use Recoil with React 19.
// Suggestion is to use Jotai or Zustand.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* <RecoilRoot>
        <App />
      </RecoilRoot> */}
      {/* <TodosStoreContext.Provider value={todosStore}>
        <App />
      </TodosStoreContext.Provider> */}
      <App />
    </Provider>
  </StrictMode>
);
