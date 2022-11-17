import React from "react";
import "./index.css";
import reactDom from "react-dom/client";
import App from "./app/App";
import store from "./app/redux/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const root = reactDom.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
