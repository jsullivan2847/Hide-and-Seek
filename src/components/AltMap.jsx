import React, { useState } from 'react'
import { GoogleMap, Marker} from '@react-google-maps/api'

export default function AltMap({position}) {
    const [mapActive, setMapActive] = useState(false)
    const options = {
       
        disableDefaultUI: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: window.google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        clickableIcons: false,
    }

    function handleClick(event){
        if(!mapActive){
            setMapActive(true)
        }
        else{
            console.log({
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
            })
        }
        
    }

    return (
        <div>
            <GoogleMap 
            options={options}
            onClick={handleClick}
            mapContainerClassName={mapActive ? 'map-active' : 'map'}
             zoom={10} 
             center={position}>
                <Marker position={position}/>
            </GoogleMap>
        </div>
    )
}