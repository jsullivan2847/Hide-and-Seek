import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

export default function GameOver({results}) {

  return (
    <div className="overlay">
        <div className='game-over'>
          <div className='card'>
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
    </div>
  )
}
