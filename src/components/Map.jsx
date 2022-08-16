import React, { useCallback, useState } from 'react'
// import Confirm from './Confirm'
import Button from './Button'
import { GoogleMap, Marker, Polyline, StreetViewPanorama} from '@react-google-maps/api'
import midpoint from '@turf/midpoint'

export default function Map({position, confirm, results}) {

    const [choice, setChoice] = useState(null)
    const [mapActive, setMapActive] = useState(false)
    const [gameEnd, setGameEnd] = useState(false)

    //MAP INITIALIZATION
    //custom map controls
    //can't figure out how to do this with jsx but I guess it's not
    //the end of the world.
    //custom control to minimize map 
    const controlDiv = document.createElement('div')
    controlDiv.innerText = '-'
    controlDiv.setAttribute('class', 'control')
    controlDiv.addEventListener('click', () => {
        setMapActive(false)
    })
     //allows access to map instance
    //so I can add a custom control
    const mapLoad = useCallback((map: google.maps.Map) => {
        //adds controls to the choice map
        //called in the onLoad prop
        map.data.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(controlDiv)
    }, [controlDiv])
    //choice map
    const mapOptions = {
        disableDefaultUI: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: window.google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        },
        clickableIcons: false,
    }
    //streetview 
    const streetOptions = { 
        disableDefaultUI: true,
        showRoadLabels: false,
        clickToGo: true, 
        enableScrollWheel: false,
        enableCloseButton: false,
    }

    //click handles 
    function handleClick(event){
        if(!mapActive){
            setMapActive(true)
            controlDiv.setAttribute('class', 'control')
        }
        else{
            setChoice({
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
            })
        }
        
    }
    //handler for confirm button
    function handleConfirm(event){
        //lifting state
        confirm([choice.lat, choice.lng]);
        setGameEnd(true);
        

    }

    function getMiddle() {
        let pointa = ([choice.lat, choice.lng])
            let pointb = ([position.lat, position.lng])
            const middle = midpoint(pointa, pointb)
            const halfway = {lat: middle.geometry.coordinates[0], lng:middle.geometry.coordinates[1] }
            return halfway
    }


    const GameEndSettings = () => {
        console.log(results)
        let zoom = 0
        results > 8000 ? zoom = 10 : zoom = 12
        results > 25000 ? zoom = 9 : zoom = zoom
        if(gameEnd){
            
            return (
                <GoogleMap
                onLoad={mapLoad}
                options={mapOptions}
                onClick={handleClick}
                mapContainerClassName={mapActive ? 'map-active' : 'map'}
                zoom={zoom} 
                center={getMiddle()}>
                    <Marker position={choice}/>
                    <Marker position={position}/>
                <Polyline 
                path={[choice, position]}
                strokeColor={'red'}
                strokeOpacity={0}
                strokeWeight={2}/>
                </GoogleMap>
            )
        }
        else{
            return (
            <GoogleMap
            onLoad={mapLoad}
            options={mapOptions}
            onClick={handleClick}
            mapContainerClassName={mapActive ? 'map-active' : 'map'}
            zoom={10} 
            center={position}>
                <Marker position={choice}/>
                <Button 
                handleClick={handleConfirm} 
                active={mapActive}
                text={'Confirm'}
                classes={"btn confirm"}/>  </GoogleMap> )
        }
    }

    return (
        <div>
            <GoogleMap
            zoom={10}
            mapContainerClassName='streetview'
            center={position}>
               <StreetViewPanorama
               visible={true}
               position={position}
               options={streetOptions}>
               </StreetViewPanorama>
            </GoogleMap>
                {GameEndSettings()}
        </div>
    )
}