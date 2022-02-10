import { Image } from 'react-bootstrap';

export const MeetupListAttendee = ({ attendee }) => {
  return (
    <Image
      src={attendee.photoUrl}
      width={50}
      fluid
      roundedCircle
      className='mr-1'
    />
  );
};
