import GoogleMapReact from 'google-map-react';
import React from 'react';

const AnyReactComponent = ({ lat, lng, text }) => <div>{text}</div>;

export const TestMap = ({ center, zoom }) => {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyChJuJrM3x5uilgJP5IByqncHnKnxfNJDI' }}
        center={defaultProps.center}
        zoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text='My Marker' />
      </GoogleMapReact>
    </div>
  );
};
