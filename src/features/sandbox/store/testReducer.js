import { TEST_ACTION } from './testConstants';

const initialState = {
  data: 42,
};

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_ACTION:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
