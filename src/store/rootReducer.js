import { combineReducers } from 'redux';
import { modalReducer } from '../components/modals/store/modalReducer';
import { meetupReducer } from '../features/meetups/store/meetupReducer';
import { testReducer } from '../features/sandbox/store/testReducer';

export const rootReducer = combineReducers({
  meetupState: meetupReducer,
  modalState: modalReducer,
  testState: testReducer,
});
