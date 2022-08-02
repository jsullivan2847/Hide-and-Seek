import Timer from "../components/Timer";
import AltMap from "../components/AltMap";
import {useLoadScript} from '@react-google-maps/api'
import { useState, useEffect } from "react";
const GamePlay = () => {

    // const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    const position = {lat: 42.345573, lng: -71.098326}

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: 'AIzaSyBrL26kHgHcE6O9YC-F7mbxCXhwscpSsdA',
    });

    const [seconds, setSeconds] = useState(3);
    const [active, setActive] = useState(false)
  
    useEffect(() => {
      if(active && seconds > 0){
        const timer = setInterval(() => setSeconds(seconds -1), 1000);
        if(seconds >= 0){
          setActive(true)
        }
        return () => clearInterval(timer);
      }
    }, [seconds])
  


    

    //This function 
    // const render = (status: Status): ReactElement => {
    //     if (status === Status.FAILURE) return <h1>failure</h1>;
    //     return <h1>loading</h1>;
    //   }; 

    //starting timer

    if(!isLoaded) return <div>Loading...</div>
    return (
        <div>
          <div style={{width: '100', height: '100', zIndex: '100'}}>
          <h1>{seconds}</h1>
          </div>
            <Timer/>
            <AltMap position={position}/>
        </div>
        
    )
}

export default GamePlay;