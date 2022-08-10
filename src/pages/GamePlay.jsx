import Timer from "../components/Timer";
import AltMap from "../components/AltMap";
import {useLoadScript} from '@react-google-maps/api'
import { useState, useEffect } from "react";
import GameOver from "../components/GameOver";
const GamePlay = () => {

    // const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    const position = {lat: 42.345573, lng: -71.098326}

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: 'AIzaSyBrL26kHgHcE6O9YC-F7mbxCXhwscpSsdA',
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
    }, [seconds])

    const [gameOver, setGameOver] = useState(false);

    function confirm(){
      setGameOver(true)
    }


    

    if(!isLoaded) return <div>Loading...</div>
    return (
        <div className="page">
            {active ? <Timer gameOver={gameOver}time={45} active={active}/> : <div className="countdown">{seconds}</div> }
            {!gameOver? <></> : <GameOver/>}
            <AltMap position={position} confirm={confirm}/>
        </div>
        
    )
}

export default GamePlay;