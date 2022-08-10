import React, { useCallback, useState } from 'react'
import Confirm from './Confirm'

import { GoogleMap, Marker, StreetViewPanorama} from '@react-google-maps/api'

export default function AltMap({position, confirm}) {

    const [map,setMap] = useState(null)
    const [choice, setChoice] = useState(position)
    
    const [mapActive, setMapActive] = useState(false)

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
    const mapLoad = useCallback((map: google.maps.Map) => {
        map.data.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(controlDiv)
        
        setMap(map)

    }, [])

    function handleConfirm(event){
        console.log('click')
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
                <Confirm confirm={confirm}active={mapActive}text={'Confirm'}/>
            </GoogleMap>
        </div>
    )
}