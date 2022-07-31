import Map from "../components/Map";
import Marker from "../components/Marker";
import Timer from "../components/Timer";
import { Wrapper, Status} from '@googlemaps/react-wrapper';
const GamePlay = () => {

    const key = 'AIzaSyBrL26kHgHcE6O9YC-F7mbxCXhwscpSsdA'

    const position = {lat: 42.345573, lng: -71.098326}

    //This function 
    const render = (status: Status): ReactElement => {
        if (status === Status.FAILURE) return <h1>failure</h1>;
        return <h1>loading</h1>;
      };


    return (
        <div>
            <Timer/>
            <Wrapper apiKey={key} render={render}>
                <Map position={position}>
                <Marker key='1'position={position}/>
                </Map>
            </Wrapper>
        </div>
        
    )
}

export default GamePlay;