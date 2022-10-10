import React, { useEffect, useState } from 'react'
import {scores, createScore} from '../../services/scores'
import Score from '../../components/Score/Score'
import '../LeaderBoard/LeaderBoard.css'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

export default function LeaderBoard() {

    //Leaderboard data flow
    //1. On user click - confirm function fires and 
    //turns results into the form of meters
    //2. Loop through the array and compare the score with all others
    // in the array and if it put it in order.
    //3. If the score is lowest in the array notify the player in
    //a modal??


    const [scoreList, setScoreList] = useState([])
    useEffect(() => {
      scores().then(response => {
        setScoreList(response)
      })
    }, [])

    //Awesome way to dry sort an array of simple ints
    scoreList.sort(function(a,b) {
      return a.score - b.score
    })

    const scoreDisplay = scoreList.map((data,index) => {
      return <Score data={data} key={index}/>
    })

    if(!scoreDisplay){
      return <>Loading...</>
    }
    else return (
    <div className='leaderboard-page'>
    <div className='leaderboard-nav'>
    <Link to={'/'}>
            <Button color={"rgb(109,255,255)"}
            text={'Main Menu'}
            active={true}
            classes={"btn"}
            />
            </Link>
      <h1>High Scores</h1>
      <div style={{width: '152px'}}></div>
    </div>
      <table className='leaderboard-2'>
        <tr>
          <th>Score</th>
          <th>Name</th>
          <th>Date</th>
        </tr>
        {scoreDisplay}
      </table>

    </div>
  )
}
