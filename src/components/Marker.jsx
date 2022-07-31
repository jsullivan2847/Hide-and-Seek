import React, { useEffect, useState } from 'react'

export default function Marker() {
    const [marker, setMarker] = useState(null);

    useEffect(() => {
        if(!marker){
            setMarker(new window.google.maps.Marker());
        }
    }, [marker]);

  return (
    <div></div>
  )
}
