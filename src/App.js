import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import MainContent from "./components/MainContent/MainContent";
import Footer from './components/Footer/Footer'
import { BrowserRouter } from "react-router-dom"


const App = props => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Sidebar />
                <MainContent />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App