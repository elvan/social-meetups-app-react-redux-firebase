import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../../../common/async/asyncActions';
import { fetchSampleData } from '../data/fetchSampleData';
import {
  MEETUP_ASYNC_ERROR,
  MEETUP_ASYNC_FINISH,
  MEETUP_ASYNC_START,
  MEETUP_CREATE,
  MEETUP_DELETE,
  MEETUP_LIST,
  MEETUP_UPDATE,
} from './meetupConstants';

export const meetupAsyncStart = () => {
  return {
    type: MEETUP_ASYNC_START,
  };
};

export const meetupAsyncFinish = () => {
  return {
    type: MEETUP_ASYNC_FINISH,
  };
};

export const meetupAsyncError = (error) => {
  return {
    type: MEETUP_ASYNC_ERROR,
    payload: error,
  };
};

export function fetchMeetups() {
  return async function (dispatch) {
    dispatch(asyncActionStart());

    try {
      const meetups = await fetchSampleData();
      dispatch({
        type: MEETUP_LIST,
        payload: meetups,
      });
    } catch (error) {
      dispatch(asyncActionError(error));
    } finally {
      dispatch(asyncActionFinish());
    }
  };
}

export function listenToMeetups(meetups) {
  return {
    type: MEETUP_LIST,
    payload: meetups,
  };
}

export function createMeetup(meetup) {
  return {
    type: MEETUP_CREATE,
    payload: meetup,
  };
}

export function updateMeetup(meetup) {
  return {
    type: MEETUP_UPDATE,
    payload: meetup,
  };
}

export function deleteMeetup(id) {
  return {
    type: MEETUP_DELETE,
    payload: id,
  };
}
