import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { openModal } from '../../../components/modals/store/modalActions';
import { TestMap } from '../components/TestMap';
import { TestPlaceInput } from '../components/TestPlaceInput';
import { decrement, increment } from '../store/testActions';

const defaultProps = {
  center: {
    lat: -6.914744,
    lng: 107.60981,
  },
  zoom: 11,
};

export const SandboxPage = () => {
  const { loading } = useSelector((state) => state.asyncState);
  const { data } = useSelector((state) => state.testState);

  const [target, setTarget] = useState('');
  const [location, setLocation] = useState(defaultProps);

  const dispatch = useDispatch();

  const handleSetLocation = (latLng) => {
    setLocation({
      ...location,
      center: {
        lat: latLng.lat,
        lng: latLng.lng,
      },
    });
  };

  return (
    <div>
      <div className='mb-3'>
        <p>
          The data from the redux store is: <strong>{data}</strong>
        </p>

        <button
          className='btn btn-success mr-2'
          disabled={loading && target === 'increment'}
          onClick={() => {
            dispatch(increment(5));
            setTarget('increment');
          }}
        >
          <div className='d-flex align-items-center justify-content-center'>
            {loading && target === 'increment' ? (
              <>
                <Spinner animation='border' size='sm' className='mr-2' />
                Incrementing...
              </>
            ) : (
              <>
                <FaPlusCircle size={15} className='mr-2' />
                Increment
              </>
            )}
          </div>
        </button>

        <button
          className='btn btn-danger mr-2'
          disabled={loading && target === 'decrement'}
          onClick={() => {
            dispatch(decrement(5));
            setTarget('decrement');
          }}
        >
          <div className='d-flex align-items-center justify-content-center'>
            {loading && target === 'decrement' ? (
              <>
                <Spinner animation='border' size='sm' className='mr-2' />
                Decrementing...
              </>
            ) : (
              <>
                <FaMinusCircle size={15} className='mr-2' />
                Decrement
              </>
            )}
          </div>
        </button>
      </div>

      <div className='mb-3'>
        <button
          className='btn btn-primary mr-2'
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

        <button
          className='btn btn-info mr-2'
          onClick={() => {
            toast.info('Info Toast');
          }}
        >
          Open Info Toast
        </button>
      </div>

      <div className='mb-3'>
        <TestPlaceInput handleSetLocation={handleSetLocation} />
      </div>

      <div className='mb-3'>
        <TestMap location={location} />
      </div>
    </div>
  );
};
