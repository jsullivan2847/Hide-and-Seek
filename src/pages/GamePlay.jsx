import Timer from "../components/Timer";
import Map from "../components/Map";
import {useLoadScript} from '@react-google-maps/api'
import { useState, useEffect} from "react";
import GameOver from "../components/GameOver";
const GamePlay = () => {

    // const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    const position = {lat: 42.345573, lng: -71.098326};
  
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

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

    const [gameOver, setGameOver] = useState(false);
    const [results, setResults] = useState(null)

    function handleConfirm(distance){
      setResults(distance)
      setGameOver(true)
    }


    if(!isLoaded) return <div>Loading...</div>
    return (
        <div className="page">
            {active ? <Timer setGameOver={()=> setGameOver(true)}
            gameOver={gameOver}
            time={10} 
            active={active}/> : <div className="countdown">{seconds}</div> }
            {!gameOver? <></> : <GameOver results={results}/>}
            <Map position={position} confirm={handleConfirm}/>
        </div>
        
    )
}

export default GamePlay;