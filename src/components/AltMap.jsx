import React, { useState } from 'react'
import { GoogleMap, Marker, StreetViewPanorama} from '@react-google-maps/api'

export default function AltMap({position}) {

    const [map,setMap] = useState(null)
    const [choice, setChoice] = useState(position)
    
    const [mapActive, setMapActive] = useState(false)
    const mapOptions = {
        disableDefaultUI: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: window.google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        clickableIcons: false,
    }
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
        }
        else{
            setChoice({
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
            })
        }
        
    }

    const control = () => {
        const controlDiv = document.createElement('div')
        controlDiv.setAttribute('class', 'timer')
        controlDiv.addEventListener('click', () => {
            console.log('clicky')
    })
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
            options={mapOptions}
            onClick={handleClick}
            mapContainerClassName={mapActive ? 'map-active' : 'map'}
            zoom={10} 
            center={position}>
                <Marker position={choice}/>

            </GoogleMap>
        </div>
    )
}