import GoogleMapReact from 'google-map-react';
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const MAPS_API_KEY = process.env.REACT_APP_MAPS_API_KEY || '';

const AnyReactComponent = ({ lat, lng }) => (
  <div>
    <FaMapMarkerAlt size={36} className='text-primary' />
  </div>
);

export const TestMap = ({ location }) => {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAPS_API_KEY }}
        center={location.center}
        zoom={location.zoom}
      >
        <AnyReactComponent
          lat={location.center.lat}
          lng={location.center.lng}
        />
      </GoogleMapReact>
    </div>
  );
};
