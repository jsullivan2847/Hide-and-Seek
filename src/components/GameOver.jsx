import React from 'react'
import Button from './Button'

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
            <Button text={'Play Again?'}/>
            <Button text={'Main Menu'}/>
            </div>
        </div>
    </div>
  )
}
