import { FaEnvelope, FaShareSquare } from 'react-icons/fa';

export const MeetupDetailsChat = () => {
  return (
    <div className='bg-white shadow rounded'>
      <div className='card mb-5'>
        <div className='card-header bg-info text-white'>
          <div className='d-flex justify-content-center align-items-center'>
            <FaEnvelope size={15} className='mr-2' />
            Chat About This Meetup
          </div>
        </div>

        <div className='card-body'>
          <div className='media'>
            <img
              src='https://randomuser.me/api/portraits/men/9.jpg'
              className='align-self-start mr-3 rounded-circle'
              alt='a man'
              width={50}
            />
            <div className='media-body'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis animi esse debitis culpa cupiditate, eveniet distinctio
                ea voluptatem hic numquam aperiam id dolorum voluptatum
                laboriosam dolor ad earum cumque maiores!
              </p>
            </div>
          </div>

          <div className='media'>
            <img
              src='https://randomuser.me/api/portraits/men/13.jpg'
              className='align-self-start mr-3 rounded-circle'
              alt='a man'
              width={50}
            />
            <div className='media-body'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti magnam, tempora sit doloremque earum incidunt quidem
                unde eos nulla ratione a asperiores. Ut ipsum neque tempora
                ducimus in blanditiis adipisci.
              </p>
            </div>
          </div>
        </div>

        <div className='card-body'>
          <div className='form-group'>
            <label htmlFor='exampleFormControlTextarea1'>
              <strong>Leave a Message</strong>
            </label>
            <textarea
              className='form-control'
              id='exampleFormControlTextarea1'
              rows={3}
            ></textarea>
          </div>

          <button className='btn btn-info btn-block'>
            <div className='d-flex justify-content-center align-items-center'>
              <FaShareSquare size={15} className='mr-2' />
              Send Message
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
