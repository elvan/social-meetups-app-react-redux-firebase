import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const MeetupListAttendee = ({ attendee }) => {
  return (
    <Link to={`/profiles/${attendee.id}`}>
      <Image
        src={attendee.photoURL || '/assets/user.png'}
        width={50}
        roundedCircle
        className="mr-1"
        style={{ height: '50px', width: '50px' }}
      />
    </Link>
  );
};
