import React, { useEffect, useState } from 'react'


export default function Timer() {
  const [seconds, setSeconds] = useState(30);
  const [active, setActive] = useState(false);
  


  useEffect(() => {
    if(seconds > 0){
      const timer = setInterval(() => setSeconds(seconds -1), 1000);
      return () => clearInterval(timer);
    }
  }, [seconds])
 
  
  return (
    <div className='timer'>{seconds > 9 ? <h1>00:{seconds}</h1> : <h1>00:0{seconds}</h1>}</div>
  )
}