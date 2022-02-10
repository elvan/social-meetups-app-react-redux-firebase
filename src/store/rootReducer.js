import { combineReducers } from 'redux';
import { meetupReducer } from '../features/meetups/store/meetupReducer';
import { testReducer } from '../features/sandbox/store/testReducer';

export const rootReducer = combineReducers({
  // ...your other reducers here
  // you can add more reducers here
  // for example:
  // auth: authReducer,
  // etc.
  testState: testReducer,
  meetupState: meetupReducer,
});
