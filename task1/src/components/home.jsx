import React from 'react'
import './components.css'
import './home.css'

const home = () => {
  return (
    <>
      <div id='container1'>
        <h1 id='welcome_text'>Welcome To</h1>
        <h1 id='itc_text'>INSTITUTE TECHNICAL COUNCIL</h1>
        <h2 id='quote_text'>Where Technology Meets Innovation</h2>
      </div>

      <div id='container2'>
        <img src="/ITClogoWhite.png" alt="Vite Logo" id='itclogo' />
        <span id='itc_description'>

          <h1 id='aboutitc_text1'>About ITC</h1>

          <h2 id='aboutitc_text2'>Where tech meets action at IITB</h2>

          <p>

            The Institute Technical Council (ITC) is the heart of all things tech on campus. From guiding student innovations to organizing events, ITC drives the tech culture forward. It’s a space where ideas aren’t just discussed — they’re built. Whether you’re just starting out or already deep into projects, ITC’s got your back. We help you explore, experiment, and execute, turning wild ideas into real impact.
          </p>

        </span>

      </div>

    </>
  )
}

export default home
