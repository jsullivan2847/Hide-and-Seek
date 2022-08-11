import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

export default function GameOver({results}) {


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
          
          <div className='result-card'>
            {results ?  <h5>Great Job! Your guess was {results} meters from the location!!! </h5>
            : <h5>Oh no! You didn't make a guess in time :(( try again??</h5>
            }
          </div>
            <div style={{display: 'flex', justifyContent: 'center', }}>
              <form action="">
              <Button color={"rgb(81,239,13)"}
              text={'Play Again?'}
              active={true}
              classes={"btn"}
              />
              </form>
            <Link to={'/'}>
            <Button color={"rgb(109,255,255)"}
            text={'Main Menu'}
            active={true}
            classes={"btn"}
            />
            </Link>
            </div> 
          
        </div>
    </div>
  )
}
