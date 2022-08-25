import React from 'react'
import GameOverNav from './GameOverNav'
import ScoreForm from './Score/ScoreForm'
import { useState } from 'react'

export default function GameOver({results, createScore}) {

  const [isOver, setIsOver] = useState()


  return (
    <div className="overlay">
        <div className='game-over'>
          <div className='card'>
          <div className='result-card'>
            {results ?  <h5>Great Job! Your guess was {results} meters from the location!!! </h5>
            : <h5>Oh no! You didn't make a guess in time :| try again??</h5>
            }
          </div>
          </div>    
        </div>
        {isOver ? <GameOverNav/> : <ScoreForm results={results} createScore={createScore} setOver={setIsOver}/>} 
    </div>
  )
}
