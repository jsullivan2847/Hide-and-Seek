import React from 'react'
import Timer from '../components/Timer'
import { Transition } from 'react-transition-group';
import { useState, useEffect } from 'react';



export default function TimerPractice() {

    const [seconds, setSeconds] = useState(3);
    const [active, setActive] = useState(false)

    useEffect(() => {
      if(active){
        return
      }  
      else if(seconds > 0){
        const timer = setInterval(() => setSeconds(seconds -1), 1000)
        return () => clearInterval(timer);
      }
      else {
        console.log('hit zero')
        setActive(true)
      }
    }, [seconds])


    //Timer should start at 3, big red letters countdown, 
    //When that timer hits 0 start the real timer 0:45
    //when the real timer hits 9 turn back to red and end at 0
  return (
    <div>
        
   {active ? <Timer time={15} active={active}/> : <div><p className='help-text'>Try and guess your location on the map before your time runs out!!</p><div className='countdown'>{seconds}</div></div> }
    </div>
  )
}
