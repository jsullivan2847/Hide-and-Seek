import React, { useEffect, useState } from 'react'
import scores from '../../services/scores'

export default function LeaderBoard() {

    //Leaderboard data flow
    //1. On user click - confirm function fires and 
    //turns results into the form of meters
    //2. Loop through the array and compare the score with all others
    // in the array and if it put it in order.
    //3. If the score is lowest in the array notify the player in
    //a modal??


    const [scoreList, setScoreList] = useState()
    useEffect(() => {
      scores().then(response => {
        setScoreList(response)
      })
      console.log(scoreList)
    }, [])

    const scoreDisplay = scoreList.map((score) => {
      return <li><h1>{score.score}</h1></li>
    })

    
  return (
    <div>
    <ul>
      {scoreDisplay}
    </ul>
    </div>
  )
}
