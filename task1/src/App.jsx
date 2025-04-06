import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import About from './components/about'
import Event from './components/events'
import Home from './components/home'
import Contact from './components/contact'
import './App.css'

function App() {
  return (
      <>
    <Router>
      <ul id="nav">
        <li><img src="ITClogoWhite.png" alt="Vite logo" id='itc_logo' /></li>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/events">Events</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Event />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>

<footer id='copyright'>Copyright © ITC, IIT Bombay</footer>
  </>
  )
}

export default App
