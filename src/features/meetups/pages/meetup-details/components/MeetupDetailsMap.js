import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Marker = ({ lat, lng }) => {
  return <FaMapMarkerAlt size={36} style={{ color: 'red' }} />;
};

export const MeetupDetailsMap = ({ latLng }) => {
  const zoom = 14;

  return (
    <div>
      <div style={{ height: 300, width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyChJuJrM3x5uilgJP5IByqncHnKnxfNJDI' }}
          center={latLng}
          zoom={zoom}
        >
          <Marker lat={latLng.lat} lng={latLng.lng} />
        </GoogleMapReact>
      </div>
    </div>
  );
};
