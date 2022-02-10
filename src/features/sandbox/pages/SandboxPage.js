import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store/testActions';

export const SandboxPage = () => {
  // @ts-ignore
  const data = useSelector((state) => state.testState.data);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Sandbox Page</h1>
      <p>
        The data from the redux store is: <strong>{data}</strong>
      </p>

      <button
        className='btn btn-success mr-2'
        onClick={() => {
          dispatch(increment(5));
        }}
      >
        Increment Counter
      </button>

      <button
        className='btn btn-danger'
        onClick={() => {
          dispatch(decrement(5));
        }}
      >
        Decrement Counter
      </button>
    </div>
  );
};
