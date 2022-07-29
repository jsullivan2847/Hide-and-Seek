import {useEffect, useState, React, useRef} from 'react'


export default function Map() {

  //ref is used to reference the div element the map will be set to...
  //in this case I'm using it where I would normally use jquery or query selector
  const ref  = useRef(null);
  const streetRef = useRef(null)
  //this state will store the entire map object itself
  const [map, setMap] = useState(null);
  const [streetView, setStreetView] = useState(null)


  useEffect(() => {
    //if there is an element to put it into, and there is no map yet 
    //instantiate a map
    if(ref.current && !map){
      setMap(new window.google.maps.Map(ref.current, {
        center: {lat: 42.345573, lng: -71.098326},
        zoom: 8
      }));

      setStreetView(new window.google.maps.StreetViewPanorama(streetRef.current, {
        position:{lat: 42.345573, lng: -71.098326},
        pov: {
          heading: 34,
          pitch: 10,
        }
      }))
    }

  }, [ref,map]);
  //finally if map and ref are truthy - don't do this again. Ref allows the map to persist even on 
  //re renders 


  return (
    <div className='maps-container'>
      <div className='streetview'ref={streetRef}></div>
       <div className='map'ref={ref}></div>
    </div>

  )
}


