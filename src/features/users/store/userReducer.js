import {
  LISTEN_TO_SELECTED_PROFILE,
  LISTEN_TO_USER_PROFILE,
} from './userConstants';

const initialState = {
  userProfile: null,
  selectedProfile: null,
};

export function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LISTEN_TO_USER_PROFILE:
      return {
        ...state,
        userProfile: payload,
      };
    case LISTEN_TO_SELECTED_PROFILE:
      return {
        ...state,
        selectedProfile: payload,
      };
    default:
      return state;
  }
}
