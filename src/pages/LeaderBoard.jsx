import React from 'react'

export default function LeaderBoard({scores}) {

    //Leaderboard data flow
    //1. On user click - confirm function fires and 
    //turns results into the form of meters
    //2. Loop through the array and compare the score with all others
    // in the array and if it put it in order.
    //3. If the score is lowest in the array notify the player in
    //a modal??
    


  return (
    <div>
    <h1>{scores}</h1>
    <ul></ul>
    </div>
  )
}
