import { Link } from 'react-router-dom';

export const ErrorComponent = ({ error }) => {
  return (
    <div className='col-6 mx-auto '>
      <div className='alert alert-danger'>
        {error?.message || 'Oops - we have an error'}
      </div>
      <div className='col-6 mx-auto '>
        <Link to='/meetups' className='btn btn-primary'>
          Back to Meetups
        </Link>
      </div>
    </div>
  );
};
