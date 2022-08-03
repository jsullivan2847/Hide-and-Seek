import Timer from "../components/Timer";
import AltMap from "../components/AltMap";
import {useLoadScript} from '@react-google-maps/api'
import { useState, useEffect } from "react";
import Button from "../components/Button";
const GamePlay = () => {

    // const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    const position = {lat: 42.345573, lng: -71.098326}

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: 'AIzaSyBrL26kHgHcE6O9YC-F7mbxCXhwscpSsdA',
    });

    const [seconds, setSeconds] = useState(3);
    const [active, setActive] = useState(false)

    useEffect(() => {
      if(seconds > 0){
        const timer = setInterval(() => setSeconds(seconds -1), 1000)
        return () => clearInterval(timer);
      }
      else {
        setActive(true)
      }
    }, [seconds])

    if(!isLoaded) return <div>Loading...</div>
    return (
        <div>
          <div style={{width: '100', height: '100', zIndex: '100'}}>
          </div>
          { active ? <Timer time={30} /> : <Timer time={3}/>}
            <AltMap position={position}/>
            {/* <Button text={'hello'}/> */}
        </div>
        
    )
}

export default GamePlay;