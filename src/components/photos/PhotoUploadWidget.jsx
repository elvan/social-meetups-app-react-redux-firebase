import { useState } from 'react';
import { PhotoWidgetDropzone } from './PhotoWidgetDropzone';

export const PhotoUploadWidget = () => {
  const [files, setFiles] = useState([]);

  return (
    <div className='row'>
      <div className='col-md-4'>
        <h6>Step 1</h6>
        <h5>Add Photo</h5>
        <PhotoWidgetDropzone setFiles={setFiles} />
      </div>
      <div className='col-md-4'>
        <h6>Step 2</h6>
        <h5>Resize Photo</h5>
      </div>
      <div className='col-md-4'>
        <h6>Step 3</h6>
        <h5>Preview & Upload</h5>
      </div>
      <div className='col-md-1'></div>
    </div>
  );
};
