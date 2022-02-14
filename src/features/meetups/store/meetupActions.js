import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../../../async/asyncActions';
import { fetchSampleData } from '../data/fetchSampleData';
import {
  addMeetupToFirestore,
  deleteMeetupInFirestore,
  updateMeetupInFirestore,
} from '../services/meetupService';
import { MEETUP_LIST } from './meetupConstants';

export function fetchMeetups() {
  return async function (dispatch) {
    try {
      dispatch(asyncActionStart());
      const meetups = await fetchSampleData();
      dispatch({ type: MEETUP_LIST, payload: meetups });
    } catch (error) {
      dispatch(asyncActionError(error));
      throw error;
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
    try {
      dispatch(asyncActionStart());
      const docRef = await addMeetupToFirestore(meetup);
      meetup.id = docRef.id;
    } catch (error) {
      dispatch(asyncActionError(error));
      throw error;
    } finally {
      dispatch(asyncActionFinish());
    }
  };
}

export function updateMeetup(meetup) {
  return async function (dispatch) {
    try {
      dispatch(asyncActionStart());
      await updateMeetupInFirestore(meetup);
    } catch (error) {
      dispatch(asyncActionError(error));
      throw error;
    } finally {
      dispatch(asyncActionFinish());
    }
  };
}

export function deleteMeetup(id) {
  return async function (dispatch) {
    try {
      dispatch(asyncActionStart());
      await deleteMeetupInFirestore(id);
    } catch (error) {
      dispatch(asyncActionError(error));
      throw error;
    } finally {
      dispatch(asyncActionFinish());
    }
  };
}
