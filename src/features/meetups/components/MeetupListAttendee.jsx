import { Image } from 'react-bootstrap';

export const MeetupListAttendee = ({ attendee }) => {
  return (
    <Image
      src={attendee.photoURL}
      width={50}
      roundedCircle
      className='mr-1'
      style={{ height: '50px', width: '50px' }}
    />
  );
};
