 import React from 'react'
import './App.css'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <Profile />
      <Footer />
    </div>
  )
}

export default App