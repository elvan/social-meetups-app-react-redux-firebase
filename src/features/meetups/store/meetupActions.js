import { fetchSampleData } from '../data/fetchSampleData';
import {
  addMeetupToFirestore,
  deleteMeetupInFirestore,
  updateMeetupInFirestore,
} from '../services/meetupService';
import {
  MEETUP_ASYNC_ERROR,
  MEETUP_ASYNC_FINISH,
  MEETUP_ASYNC_START,
  MEETUP_LIST,
} from './meetupConstants';

export function fetchMeetups() {
  return async function (dispatch) {
    try {
      dispatch({ type: MEETUP_ASYNC_START });
      const meetups = await fetchSampleData();
      dispatch({ type: MEETUP_LIST, payload: meetups });
    } catch (error) {
      dispatch({ type: MEETUP_ASYNC_ERROR, payload: error });
      throw error;
    } finally {
      dispatch({ type: MEETUP_ASYNC_FINISH });
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
    try {
      dispatch({ type: MEETUP_ASYNC_START });
      const docRef = await addMeetupToFirestore(meetup);
      meetup.id = docRef.id;
    } catch (error) {
      dispatch({ type: MEETUP_ASYNC_ERROR, payload: error });
      throw error;
    } finally {
      dispatch({ type: MEETUP_ASYNC_FINISH });
    }
  };
}

export function updateMeetup(meetup) {
  return async function (dispatch) {
    try {
      dispatch({ type: MEETUP_ASYNC_START });
      await updateMeetupInFirestore(meetup);
    } catch (error) {
      dispatch({ type: MEETUP_ASYNC_ERROR, payload: error });
      throw error;
    } finally {
      dispatch({ type: MEETUP_ASYNC_FINISH });
    }
  };
}

export function deleteMeetup(id) {
  return async function (dispatch) {
    try {
      dispatch({ type: MEETUP_ASYNC_START });
      await deleteMeetupInFirestore(id);
    } catch (error) {
      dispatch({ type: MEETUP_ASYNC_ERROR, payload: error });
      throw error;
    } finally {
      dispatch({ type: MEETUP_ASYNC_FINISH });
    }
  };
}
