import React from "react";
import reactDom from "react-dom/client";
import App from "./App";
import {state} from "./redux/state";
import {posts, sendRenderAllToPosts} from "./redux/statePosts";
import {dialogs, sendRenderAllToDialogs} from "./redux/stateDialogs";

const root = reactDom.createRoot(document.getElementById('root'))
const renderAll = () => {
    root.render(<App state={state} posts={posts} dialogs={dialogs}/>)
}

renderAll()

sendRenderAllToDialogs(renderAll)
sendRenderAllToPosts(renderAll)
