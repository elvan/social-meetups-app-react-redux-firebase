import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../components/modals/store/modalActions';
import { decrement, increment } from '../store/testActions';

export const SandboxPage = () => {
  // @ts-ignore
  const data = useSelector((state) => state.testState.data);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Sandbox Page</h1>

      <h3>Counter Reducer Example</h3>
      <div className='mb-3'>
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

      <div>
        <h3>Test Modal</h3>

        <button
          className='btn btn-primary'
          onClick={() => {
            dispatch(
              openModal({
                modalType: 'TestModal',
                modalProps: { data },
              })
            );
          }}
        >
          Open Test Modal
        </button>
      </div>
    </div>
  );
};
