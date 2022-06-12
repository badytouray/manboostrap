import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '60vh',
  margin: 'auto'
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDrmse8-r3eQbzTbHjaExyhqEvbhEgUweA"
  
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
          lat: 50.819538,
          lng: -0.136280
        }}
        zoom={12}
       
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker
        position={{
          lat: 50.819538,
          lng: -0.136280
        }}
        />
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)