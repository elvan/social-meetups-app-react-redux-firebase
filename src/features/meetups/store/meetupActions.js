import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../../../common/async/asyncActions';
import { fetchSampleData } from '../data/fetchSampleData';
import {
  addMeetupToFirestore,
  deleteMeetupInFirestore,
  updateMeetupInFirestore,
} from '../services/meetupFirestore';
import {
  MEETUP_ASYNC_ERROR,
  MEETUP_ASYNC_FINISH,
  MEETUP_ASYNC_START,
  MEETUP_LIST,
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
      dispatch({ type: MEETUP_LIST, payload: meetups });
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
  return async function (dispatch) {
    dispatch(meetupAsyncStart());

    try {
      const docRef = await addMeetupToFirestore(meetup);
      meetup.id = docRef.id;
    } catch (error) {
      dispatch(meetupAsyncError(error));
    } finally {
      dispatch(meetupAsyncFinish());
    }
  };
}

export function updateMeetup(meetup) {
  return async function (dispatch) {
    dispatch(meetupAsyncStart());

    try {
      await updateMeetupInFirestore(meetup);
    } catch (error) {
      dispatch(meetupAsyncError(error));
    } finally {
      dispatch(meetupAsyncFinish());
    }
  };
}

export function deleteMeetup(id) {
  return async function (dispatch) {
    dispatch(meetupAsyncStart());

    try {
      await deleteMeetupInFirestore(id);
    } catch (error) {
      dispatch(meetupAsyncError(error));
    } finally {
      dispatch(meetupAsyncFinish());
    }
  };
}
