import Map from "../components/Map";
import { Wrapper, Status} from '@googlemaps/react-wrapper';
const GamePlay = () => {
    const key = 'AIzaSyBrL26kHgHcE6O9YC-F7mbxCXhwscpSsdA'

    //This function 
    const render = (status: Status): ReactElement => {
        if (status === Status.FAILURE) return <h1>failure</h1>;
        return <h1>loading</h1>;
      };


    return (
        <div>
            <Wrapper apiKey={key} render={render}>
                <Map/>
            </Wrapper>
        </div>
        
    )
}

export default GamePlay;