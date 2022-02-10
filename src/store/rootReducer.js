import { combineReducers } from 'redux';
import { meetupReducer } from '../features/meetups/store/meetupReducer';
import { testReducer } from '../features/sandbox/store/testReducer';

export const rootReducer = combineReducers({
  testState: testReducer,
  meetupState: meetupReducer,
});
