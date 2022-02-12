import {
  MEETUP_ASYNC_ERROR,
  MEETUP_ASYNC_FINISH,
  MEETUP_ASYNC_START,
  MEETUP_CREATE,
  MEETUP_DELETE,
  MEETUP_LIST,
  MEETUP_UPDATE,
} from './meetupConstants';

const initialState = {
  /** @type {any[]} */
  meetups: [],
  pending: false,
  error: null,
};

export function meetupReducer(state = initialState, { type, payload }) {
  switch (type) {
    case MEETUP_ASYNC_START:
      return {
        ...state,
        pending: true,
      };
    case MEETUP_ASYNC_FINISH:
      return {
        ...state,
        pending: false,
      };
    case MEETUP_ASYNC_ERROR:
      return {
        ...state,
        pending: false,
        error: payload,
      };
    case MEETUP_LIST:
      return {
        ...state,
        meetups: payload,
      };
    case MEETUP_CREATE:
      return {
        ...state,
        meetups: [...state.meetups, payload],
      };
    case MEETUP_UPDATE:
      return {
        ...state,
        meetups: state.meetups.map((meetup) => {
          if (meetup.id === payload.id) {
            return payload;
          }
          return meetup;
        }),
      };
    case MEETUP_DELETE:
      return {
        ...state,
        meetups: state.meetups.filter((meetup) => meetup.id !== payload),
      };
    default:
      return state;
  }
}
