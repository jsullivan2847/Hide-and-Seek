import React, { useCallback, useState } from 'react'
import Button from './Button'

import { GoogleMap, Marker, StreetViewPanorama} from '@react-google-maps/api'

export default function AltMap({position}) {

    const [map,setMap] = useState(null)
    const [choice, setChoice] = useState(position)
    
    const [mapActive, setMapActive] = useState(false)

    const control = () => {
        return (
            <div className='control'><h1>hello</h1></div>
        )
    }

    const mapOptions = {
        disableDefaultUI: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: window.google.maps.MapTypeControlStyle.DROPDOWN_MENU,
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




    const mapLoad = useCallback((map: google.maps.Map) => {
        const controlDiv = document.createElement('div')
        controlDiv.setAttribute('class', 'control')
        map.data.map.controls[google.maps.ControlPosition.TOP_CENTER].push(controlDiv)
        console.log('map data', map.data.map.controls)
        
        setMap(map)

    }, [])


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
            center={position}
            control={control}>
                <Marker position={choice}/>

            </GoogleMap>
        </div>
    )
}