import { LISTEN_TO_USER_PROFILE } from './profileConstants';

const initialState = {
  userProfile: null,
};

export function profileReducer(state = initialState, { type, payload }) {
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
