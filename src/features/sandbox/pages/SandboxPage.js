import { useDispatch, useSelector } from 'react-redux';
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from '../store/testConstants';

export const SandboxPage = () => {
  // @ts-ignore
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Sandbox Page</h1>
      <p>
        The data from the redux store is: <strong>{data}</strong>
      </p>

      <button
        onClick={() => {
          dispatch({ type: INCREMENT_COUNTER });
        }}
        className='btn btn-success mr-2'
      >
        Increment Counter
      </button>

      <button
        onClick={() => {
          dispatch({ type: DECREMENT_COUNTER });
        }}
        className='btn btn-danger'
      >
        Decrement Counter
      </button>
    </div>
  );
};
