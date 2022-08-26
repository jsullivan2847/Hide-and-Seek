import React from 'react'
import '../Footer/Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='info'>
        <p>Developed by James Sullivan © 2022</p>
        </div>
        <div className='icon-container'>
        <img className='icon' src="../images/twitter.png"  alt="" />
        <img className='icon' src="../images/github.png" alt="" />
        <img className='icon' src="../images/linkedIn.png" alt="" />
        </div>
    </div>
  )
}
