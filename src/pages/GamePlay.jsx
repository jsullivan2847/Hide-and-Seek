import Timer from "../components/Timer";
import Map from "../components/Map";
import {useLoadScript} from '@react-google-maps/api'
import { useState, useEffect} from "react";
import GameOver from "../components/GameOver";
import haversineDistance from "haversine-distance";
const GamePlay = () => {

  //generate answer
  function getPosition(){
    let lat = Number((Math.random() * (40.7130 - (40.7100)) + 40.7100).toFixed(5))
    let lng = Number((Math.random() * (-74.0060 - (-74.0000)) + (-74.0000)).toFixed(5))

    return {lat: lat, lng: lng}
  }
  const [position, setPosition] = useState(null)

  //set it in state
  useEffect(() => {
    setPosition(getPosition())
  }, [])

  //api call
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    //timer
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
        setActive(true)
      }
    }, [seconds, active])
    
    //page state management
    const [gameOver, setGameOver] = useState(false);
    const [results, setResults] = useState(null)

    function handleConfirm(choice){
      if(choice){
        let confirmedChoice = {
          lat: choice[0],
          lng: choice[1]
        }
        let distance = haversineDistance(confirmedChoice, position).toFixed(0)
        setResults(distance)
      }
      setGameOver(true)
    }

    function timerShow(){
      if(gameOver){
        return  <GameOver results={results}/>
      }
      else {
        return (
          <>
            {active ? 
            <Timer setGameOver={()=> setGameOver(true)}
                gameOver={gameOver}
                time={45} 
                active={active}/> :
             <div className="countdown">{seconds}</div> } </>
        )
      }
    }


    if(!isLoaded) return <div>Loading...</div>
    return (
        <div className="page">
          {timerShow()}
            { active? <div>
            <Map results={results} position={position} confirm={handleConfirm}/>
            </div> : <></> }
           
        </div>
        
    )
}

export default GamePlay;