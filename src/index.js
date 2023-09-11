import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux"; // для создания store
import { Provider } from "react-redux"; // чтобы связать store с приложением (реакт с редаксом)

const defaultState = {
  count: 0,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "plus":
      return {
      ...state,
       count: state.count + 1
      }
    case "minus":
      return {
        ...state,
         count: state.count - 1
        }
    default:
      return state;
  }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
