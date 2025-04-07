import React from 'react'
import './components.css'
import './contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div id='contact_container'>
      <h1>feel free to reach at any time!</h1>
      <ul>
        <li><FontAwesomeIcon icon={faFacebook} size="1x" /><a href="https://www.facebook.com/tech.iitb/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><FontAwesomeIcon icon={faInstagram} size="1x" /> <a href="https://www.instagram.com/tech.iitb" target="_blank" rel="noopener noreferrer">instagram</a></li>
        <li><FontAwesomeIcon icon={faTwitter} size="1x" /><a href="https://x.com/tech_iitb" target="_blank" rel="noopener noreferrer">
      Twitter</a></li>
        <li>📞8128679781</li>
        <li>✉️gsectech@iitb.ac.in</li>
      </ul>
    </div>
  )
}

export default Contact