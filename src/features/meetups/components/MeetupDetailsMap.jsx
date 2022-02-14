import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const MAPS_API_KEY = process.env.REACT_APP_MAPS_API_KEY || '';

const Marker = ({ lat, lng }) => {
  return <FaMapMarkerAlt size={36} style={{ color: 'red' }} />;
};

export const MeetupDetailsMap = ({ latLng }) => {
  const zoom = 14;

  return (
    <div>
      <div style={{ height: 300, width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: MAPS_API_KEY }}
          center={latLng}
          zoom={zoom}
        >
          <Marker lat={latLng.lat} lng={latLng.lng} />
        </GoogleMapReact>
      </div>
    </div>
  );
};
