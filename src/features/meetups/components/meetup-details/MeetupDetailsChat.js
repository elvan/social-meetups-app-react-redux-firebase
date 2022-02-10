export const MeetupDetailsChat = () => {
  return (
    <div className='bg-white shadow rounded'>
      <div className='card mb-5'>
        <div className='card-header bg-info text-white text-center'>
          Chat About This Meetup
        </div>

        <div className='card-body'>
          <div className='media'>
            <img
              src='https://randomuser.me/api/portraits/men/9.jpg'
              className='align-self-start mr-3'
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
              className='align-self-start mr-3'
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
              <strong>Leave a Comment</strong>
            </label>
            <textarea
              className='form-control'
              id='exampleFormControlTextarea1'
              rows={3}
            ></textarea>
          </div>

          <button className='btn btn-info btn-block'>Send Message</button>
        </div>
      </div>
    </div>
  );
};
