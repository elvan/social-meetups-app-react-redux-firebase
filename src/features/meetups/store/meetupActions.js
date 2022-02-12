import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../../../common/async/asyncActions';
import { fetchSampleData } from '../data/fetchSampleData';
import {
  CREATE_MEETUP,
  DELETE_MEETUP,
  FETCH_MEETUPS,
  UPDATE_MEETUP,
} from './meetupConstants';

export function fetchMeetups() {
  return async function (dispatch) {
    dispatch(asyncActionStart());

    try {
      const meetups = await fetchSampleData();
      dispatch({
        type: FETCH_MEETUPS,
        payload: meetups,
      });
    } catch (error) {
      dispatch(asyncActionError(error));
    } finally {
      dispatch(asyncActionFinish());
    }
  };
}

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
