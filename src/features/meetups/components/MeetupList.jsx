import React from 'react';
import { MeetupListItem } from './MeetupListItem';

export const MeetupList = ({ meetups }) => {
  return (
    <>
      {meetups.map((meetup) => (
        <MeetupListItem key={meetup.id} meetup={meetup} />
      ))}
    </>
  );
};
