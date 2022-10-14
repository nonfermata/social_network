import React from 'react'
import './App.css'
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import MainContent from "./components/mainContent/mainContent";
// import Footer from './components/footer/footer'
import { BrowserRouter } from "react-router-dom"


const App = ({state}) => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Sidebar menu={state.getMenu()}/>
                <MainContent
                    profile={state.getProfile()}
                    state={state}
                />
                {/*<Footer />*/}
            </div>
        </BrowserRouter>
    )
}

export default App