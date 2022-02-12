import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../../../common/async/asyncActions';
import { delay } from '../../../common/utils/delay';
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from './testConstants';

export const increment = (amount = 1) => {
  return async (dispatch, getState) => {
    dispatch(asyncActionStart());

    try {
      await delay(1000);
      dispatch({
        type: INCREMENT_COUNTER,
        payload: amount,
      });
    } catch (error) {
      dispatch(asyncActionError(error));
    } finally {
      dispatch(asyncActionFinish());
    }
  };
};

export const decrement = (amount = 1) => {
  return async (dispatch, getState) => {
    dispatch(asyncActionStart());

    try {
      await delay(1000);
      dispatch({
        type: DECREMENT_COUNTER,
        payload: amount,
      });
    } catch (error) {
      dispatch(asyncActionError(error));
    } finally {
      dispatch(asyncActionFinish());
    }
  };
};
