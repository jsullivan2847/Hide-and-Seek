import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

export default function GameOver() {

    const Overlay_Styles = {
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0, .7)',
        zIndex: 100
    }
  return (
    <div style={Overlay_Styles}>
        <div className='game-over'>
            <h5>Great Job! Your guess was ___ from the location.</h5>
            <div style={{display: 'flex', justifyContent: 'center', }}>
              <form action="">
              <Button text={'Play Again?'}/>
              </form>
            <Link to={'/'}>
            <Button text={'Main Menu'}/>
            </Link>
            </div>
        </div>
    </div>
  )
}
