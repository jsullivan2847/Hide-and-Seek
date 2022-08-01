import React from 'react'
import { GoogleMap} from '@react-google-maps/api'

export default function AltMap() {
    return <GoogleMap mapContainerClassName='map' zoom={10} center={{lat: 42.345573, lng: -71.098326}}></GoogleMap>
}