import { Fragment } from 'react';
import { MeetupListItem } from './MeetupListItem';

export const MeetupList = ({ meetups, selectMeetup, deleteMeetup }) => {
  return (
    <Fragment>
      {meetups.map((meetup) => (
        <MeetupListItem
          key={meetup.id}
          meetup={meetup}
          selectMeetup={selectMeetup}
          deleteMeetup={deleteMeetup}
        />
      ))}
    </Fragment>
  );
};
