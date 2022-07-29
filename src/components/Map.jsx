import {useEffect, useState, React, useRef} from 'react'


export default function Map() {

  const ref  = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if(ref.current && !map){
      setMap(new window.google.maps.Map(ref.current, {
        center: {lat: 74.44, lng: 44.949},
        zoom: 8
      }));
    }
  }, [ref,map]);

  return (
        <div className='map'style={{width: '500px'}}ref={ref}>Map</div>
  )
}


