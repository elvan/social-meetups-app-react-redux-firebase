import {
  GET_MEETUP_COMMENTS_ERROR,
  GET_MEETUP_COMMENTS_REQUEST,
  GET_MEETUP_COMMENTS_SUCCESS,
  LISTEN_TO_MEETUP_COMMENTS,
  MEETUP_ASYNC_ERROR,
  MEETUP_ASYNC_FINISH,
  MEETUP_ASYNC_START,
  MEETUP_CREATE,
  MEETUP_DELETE,
  MEETUP_LIST,
  MEETUP_UPDATE,
} from './meetupConstants';

const initialState = {
  loading: false,
  error: null,
  meetups: [],
  comments: [],
  commentsIsLoading: false,
  commentsError: null,
};

export function meetupReducer(state = initialState, { type, payload }) {
  switch (type) {
    case MEETUP_ASYNC_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case MEETUP_ASYNC_FINISH:
      return {
        ...state,
        loading: false,
      };
    case MEETUP_ASYNC_ERROR:
      return {
        ...state,
        loading: false,
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
    case LISTEN_TO_MEETUP_COMMENTS:
      return {
        ...state,
        comments: payload,
      };
    case GET_MEETUP_COMMENTS_REQUEST:
      return {
        ...state,
        commentsIsLoading: true,
        commentsError: null,
      };
    case GET_MEETUP_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: payload,
        commentsIsLoading: false,
      };
    case GET_MEETUP_COMMENTS_ERROR:
      return {
        ...state,
        comments: [],
        commentsIsLoading: false,
      };
    default:
      return state;
  }
}
