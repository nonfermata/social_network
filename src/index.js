import React from 'react'
import reactDom from 'react-dom/client'
import App from './App'
import {state} from "./redux/state";
import  {posts} from "./redux/statePosts";
import {dialogs} from "./redux/stateDialogs";
// import reportWebVitals from './reportWebVitals'

const root = reactDom.createRoot(document.getElementById('root'))
root.render(<App state={state} posts={posts} dialogs={dialogs}/>)

// reportWebVitals()