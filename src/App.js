import React from 'react';
import { GoogleMap, useLoadScript, Marker, KmlLayer } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 37.4222870257072, // default latitude
  lng: -122.08195787500944, // default longitude
};

const App = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyC97uzheT2SFtgxUf7b0BdDjR_kwThSCaM',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
      <div>
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={100}
            center={center}
        >
          <Marker position={center} />
          <KmlLayer url={'https://developers.google.com/kml/documentation/KML_Samples.kml?csw=1'}/>
        </GoogleMap>
      </div>
  );
};

export default App;