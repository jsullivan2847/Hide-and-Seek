import Timer from "../components/Timer";
import AltMap from "../components/AltMap";
import {useLoadScript} from '@react-google-maps/api'
const GamePlay = () => {

    // const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    const position = {lat: 42.345573, lng: -71.098326}

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: 'AIzaSyBrL26kHgHcE6O9YC-F7mbxCXhwscpSsdA',
    });
    if(!isLoaded) return <div>Loading...</div>

    //This function 
    // const render = (status: Status): ReactElement => {
    //     if (status === Status.FAILURE) return <h1>failure</h1>;
    //     return <h1>loading</h1>;
    //   }; 


    return (
        <div>
            <Timer/>
            <AltMap position={position}/>
        </div>
        
    )
}

export default GamePlay;