import { Fragment } from 'react';
import { MeetupListItem } from './MeetupListItem';

export const MeetupList = ({ meetups }) => {
  return (
    <Fragment>
      {meetups.map((meetup) => (
        <MeetupListItem key={meetup.id} meetup={meetup} />
      ))}
    </Fragment>
  );
};
