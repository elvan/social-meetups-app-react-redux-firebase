import { CREATE_MEETUP, DELETE_MEETUP, UPDATE_MEETUP } from './meetupConstants';

export function createMeetup(meetup) {
  return {
    type: CREATE_MEETUP,
    payload: meetup,
  };
}

export function updateMeetup(meetup) {
  return {
    type: UPDATE_MEETUP,
    payload: meetup,
  };
}

export function deleteMeetup(id) {
  return {
    type: DELETE_MEETUP,
    payload: id,
  };
}
