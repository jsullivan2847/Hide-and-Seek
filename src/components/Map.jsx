import {useEffect, useState, React, useRef} from 'react'


export default function Map({position}) {


  //ref is used to reference the div element the map will be set to...
  //in this case I'm using it where I would normally use jquery or query selector
  const ref  = useRef(null);
  const streetRef = useRef(null)
  //this state will store the entire map object itself
  const [map, setMap] = useState(null);
  const [streetView, setStreetView] = useState(null)

  const [mapActive, setMapActive] = useState(false)
  let answer = {}


  useEffect(() => {
    //if there is an element to put it into, and there is no map yet 
    //instantiate a map
    if(ref.current && !map){
      setMap(new window.google.maps.Map(ref.current, {
        center: position,
        zoom: 10,
        disableDefaultUI: true,
        mapTypeControl: true,
        clickableIcons: false,
        controlSize: 20,
      }));

      setStreetView(new window.google.maps.StreetViewPanorama(streetRef.current, {
        position: position,
        pov: {
          heading: 34,
          pitch: 10,
        },
        disableDefaultUI: true,
        showRoadLabels: false,
        clickToGo: true, 
        scrollwheel: false,
      }))
    }
  }, [ref,map]);
  //storing answers
  if(streetView && map){

    console.log('streetview',streetView)
    console.log('map',map)
      answer = { 
      lat: streetView.position.lat(),
      lng: streetView.position.lng(),
    }
  }


  function handleMapClick(event){
    if(mapActive === false){
      setMapActive(true)
      streetView.visible = false
    }
    
  }
  function handleStreetClick(event) {
    if(mapActive === true){
      setMapActive(false)
      streetView.clickToGo = true
    }
  }



  //finally if map and ref are truthy - don't do this again. Ref allows the map to persist even on 
  //re renders 


  return (
    <div className='maps-container'>
      <div onClick={handleStreetClick}className='streetview'ref={streetRef}></div>
       <div onClick={handleMapClick} className={mapActive ? 'map-active' : 'map'}ref={ref}></div>
    </div>

  )
}


