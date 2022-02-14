import {
  LISTEN_TO_USER_PROFILE,
  USER_ASYNC_ERROR,
  USER_ASYNC_FINISH,
  USER_ASYNC_START,
} from './userConstants';

export const userAsyncStart = () => {
  return {
    type: USER_ASYNC_START,
  };
};

export const userAsyncFinish = () => {
  return {
    type: USER_ASYNC_FINISH,
  };
};

export const userAsyncError = (error) => {
  return {
    type: USER_ASYNC_ERROR,
    payload: error,
  };
};

export function listenToUserProfile(profile) {
  return {
    type: LISTEN_TO_USER_PROFILE,
    payload: profile,
  };
}
