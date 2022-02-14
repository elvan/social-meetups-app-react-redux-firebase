import { LISTEN_TO_USER_PROFILE } from './userConstants';

const initialState = {
  userProfile: null,
};

export function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LISTEN_TO_USER_PROFILE:
      return {
        ...state,
        userProfile: payload,
      };
    default:
      return state;
  }
}
