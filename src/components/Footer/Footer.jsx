import React from 'react'
import { Link } from 'react-router-dom'
import '../Footer/Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='info'>
        <p>Developed by James Sullivan © 2022</p>
        </div>
        <div className='icon-container'>
            <a href='https://twitter.com/popcornfamine'>
            <img className='icon' src="../images/twitter.png"  alt="twitter" />
            </a>
            <a href="https://github.com/jsullivan2847">
            <img className='icon' src="../images/github.png" alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/james-d-sullivan/">
            <img className='icon' src="../images/linkedIn.png" alt="linkedIn" />
            </a>
        </div>
    </div>
  )
}
