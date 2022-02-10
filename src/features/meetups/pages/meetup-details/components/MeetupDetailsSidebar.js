export const MeetupDetailsSidebar = () => {
  return (
    <div className='bg-white shadow rounded'>
      <div className='card'>
        <div className='card-header bg-info text-white text-center'>
          3 People Going
        </div>

        <ul className='list-group list-group-flush'>
          <li className='list-group-item d-flex align-items-center'>
            <img
              src='https://randomuser.me/api/portraits/men/9.jpg'
              alt='a man'
              width={50}
              className='mr-2'
            />
            <h5 className='card-title'>Example User</h5>
          </li>
          <li className='list-group-item d-flex align-items-center'>
            <img
              src='https://randomuser.me/api/portraits/men/10.jpg'
              alt='a man'
              width={50}
              className='mr-2'
            />
            <h5 className='card-title'>Example User</h5>
          </li>
          <li className='list-group-item d-flex align-items-center'>
            <img
              src='https://randomuser.me/api/portraits/men/11.jpg'
              alt='a man'
              width={50}
              className='mr-2'
            />
            <h5 className='card-title'>Example User</h5>
          </li>
        </ul>
      </div>
    </div>
  );
};
