import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  // @ts-ignore
  const data = useSelector((state) => state.testState.data);

  const dispatch = useDispatch();

  const [location, setLocation] = useState(defaultProps);

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
          onClick={() => {
            dispatch(increment(5));
          }}
        >
          Increment Counter
        </button>

        <button
          className='btn btn-danger mr-2'
          onClick={() => {
            dispatch(decrement(5));
          }}
        >
          Decrement Counter
        </button>

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
