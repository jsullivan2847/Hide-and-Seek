import React, { useEffect, useState } from 'react'

export default function Timer({time, active, gameOver, setGameOver}) {
  const [seconds, setSeconds] = useState(time);



  useEffect(() => {
 
    if(active && !gameOver){
      if(seconds > 0){
        const timer = setInterval(() => {
          setSeconds(seconds -1)
        }, 1000);
        return () => clearInterval(timer);
      }
      else if(seconds === 0 && !active){
        console.log('time up', time)
        setSeconds(time)
      }
      else if(seconds === 0 && active){
        console.log('game over')
      }
      else{
        console.log('something went wrong')
        return
      }
    }
    if(seconds === 0 && !gameOver){
      setGameOver()
    }
  }, [seconds, time, active, gameOver])


  return (
    <div>
      <div className='timer'>{seconds > 9 ? <h1>00:{seconds}</h1> : <h1 className='game-end'>00:0{seconds}</h1>}</div>
    </div>
  )
}