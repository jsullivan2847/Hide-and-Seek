import React, { useCallback, useState } from 'react'
// import Confirm from './Confirm'
import Button from './Button'
import { GoogleMap, Marker, StreetViewPanorama} from '@react-google-maps/api'

export default function Map({position, confirm}) {

    const [choice, setChoice] = useState(position)
    const [mapActive, setMapActive] = useState(false)

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

    //allows access to map instance
    //so I can add a custom control
    const mapLoad = useCallback((map: google.maps.Map) => {
        //adds controls to the choice map
        //called in the onLoad prop
        map.data.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(controlDiv)
    }, [controlDiv])


    function handleConfirm(event){
        let resultLat = position.lat - choice.lat
        let resultLng = position.lng - choice.lng
        // let result = {
        //     lat: position.lat - choice.lat,
        //     lng: position.lng - choice.lng
        // }
        let result = [resultLat, resultLng]
        confirm(result)
        
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
                classes={"btn confirm"}/>
            </GoogleMap>
        </div>
    )
}