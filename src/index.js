import React from "react";
import reactDom from "react-dom/client";
import App from "./App";
import state from "./redux/state";

const root = reactDom.createRoot(document.getElementById('root'))
const renderAll = () => {
    root.render(
        <App state={state}/>
    )
}

renderAll()

state.sendRenderAll(renderAll)
