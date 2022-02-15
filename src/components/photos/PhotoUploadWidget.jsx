import { useState } from 'react';
import { PhotoWidgetCropper } from './PhotoWidgetCropper';
import { PhotoWidgetDropzone } from './PhotoWidgetDropzone';

export const PhotoUploadWidget = () => {
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState(null);

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
        {files.length > 0 && (
          <PhotoWidgetCropper
            setImage={setImage}
            imagePreview={files[0].preview}
          />
        )}
      </div>
      <div className='col-md-4'>
        <h6>Step 3</h6>
        <h5>Preview & Upload</h5>
        {files.length > 0 && (
          <>
            <div
              className='img-preview'
              style={{
                minHeight: '200px',
                minWidth: '200px',
                overflow: 'hidden',
              }}
            ></div>
            <div className='btn-group d-flex justify-content-center'>
              <button
                className='btn btn-success'
                onClick={() => {
                  console.log('uploading...');
                }}
              >
                Upload
              </button>
              <button
                className='btn btn-danger'
                onClick={() => {
                  console.log('uploading...');
                }}
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
