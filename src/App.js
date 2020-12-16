import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './config/Routes'
import Welcome from './components/Welcome'
import AboutUs from './components/AboutUs'
import MenuAndLocation from './components/MenuAndLocation'
import Gallery from './components/Gallery'
import Events from './components/Events'

import Contact from './components/Contact'
import './App.css'
import UserModel from './models/user'

function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('id'))

  const storeUser = (userId) => {
    localStorage.setItem('id', userId)
    setCurrentUser( userId )
  }

  const logout = (event) => {
    event.preventDefault()

    localStorage.removeItem('id')

    UserModel.logout()
      .then(res => {
        setCurrentUser(null)
      })
  }

  return (
    <div className="App">
      <Header 
        currentUser={ currentUser } 
        logout={ logout }
      />
      <Routes 
        currentUser={ currentUser }
        storeUser={ storeUser }
      />
      <Welcome />
      <AboutUs />
      <MenuAndLocation />
      <Gallery />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}

export default App 
