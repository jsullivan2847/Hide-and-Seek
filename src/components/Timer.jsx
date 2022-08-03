import React, { useEffect, useState } from 'react'
import { isCompositeComponent } from 'react-dom/test-utils';


export default function Timer({time, start}) {
  const [seconds, setSeconds] = useState(time);


  useEffect(() => {
    if(seconds > 0){
      const timer = setInterval(() => {
        setSeconds(seconds -1)
      }, 1000);
      return () => clearInterval(timer);
    }
    else if(seconds === 0){
      setSeconds(time)
    }
    else{
      return
    }
  }, [seconds, time])

  return (
    <div>
      <div className='timer'>{seconds > 9 ? <h1>00:{seconds}</h1> : <h1 className='game-end'>00:0{seconds}</h1>}</div>
    </div>
  )
}