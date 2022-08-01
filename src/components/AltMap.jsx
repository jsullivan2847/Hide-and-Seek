import React, { useState } from 'react'
import { GoogleMap, Marker, StreetViewPanorama} from '@react-google-maps/api'

export default function AltMap({position}) {
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
            console.log({
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
            })
        }
        
    }

    return (
        <div>
            <GoogleMap
            streetView={true}
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
                <Marker position={position}/>
            </GoogleMap>
        </div>
    )
}