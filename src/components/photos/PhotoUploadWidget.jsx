import cuid from 'cuid';
import React, { useState } from 'react';
import { ProgressBar, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';

import { uploadFileToStorage } from '../../features/users/services/storageService';
import { updateUserProfilePhotoInFirebase } from '../../features/users/services/userService';
import { getFileExtension } from '../../utils/getFileExtension';
import { PhotoWidgetCropper } from './PhotoWidgetCropper';
import { PhotoWidgetDropzone } from './PhotoWidgetDropzone';

export const PhotoUploadWidget = ({ setEditMode }) => {
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleUploadImage = () => {
    setLoading(true);

    // @ts-ignore
    const filename = cuid() + '.' + getFileExtension(files[0].name);

    const uploadTask = uploadFileToStorage(image, filename);
    uploadTask?.on(
      'state_changed',
      (snapshot) => {
        setProgress(
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        );
      },
      (error) => {
        toast.error(error.message);
        setLoading(false);
      },
      () => {
        uploadTask?.snapshot?.ref
          ?.getDownloadURL()
          .then((downloadURL) => {
            updateUserProfilePhotoInFirebase(downloadURL, filename).then(() => {
              handleCancelCrop();
              setLoading(false);
              setEditMode(false);
            });
          })
          .catch((error) => {
            setLoading(false);
            toast.error(error.message);
          });
      }
    );
  };

  const handleCancelCrop = () => {
    setImage(null);
    setFiles([]);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <h6>Step 1</h6>
          <h5>Add Photo</h5>
          <PhotoWidgetDropzone setFiles={setFiles} />
        </div>
        <div className="col-md-4">
          <h6>Step 2</h6>
          <h5>Resize Photo</h5>
          {files.length > 0 && (
            <PhotoWidgetCropper
              // @ts-ignore
              imagePreview={files[0].preview}
              setImage={setImage}
            />
          )}
        </div>
        <div className="col-md-4">
          <h6>Step 3</h6>
          <h5>Preview & Upload</h5>
          {files.length > 0 && (
            <>
              <div
                className="img-preview"
                style={{
                  minHeight: '200px',
                  minWidth: '200px',
                  overflow: 'hidden',
                }}
              ></div>
              <div className="btn-group d-flex justify-content-center p-3">
                <button
                  className="btn btn-success w-100"
                  onClick={handleUploadImage}
                  disabled={loading}
                >
                  {loading && (
                    <Spinner
                      animation="border"
                      style={{ height: '18px', width: '18px' }}
                    />
                  )}
                  {!loading && <>Upload</>}
                </button>
                <button
                  className="btn btn-danger  w-100"
                  onClick={handleCancelCrop}
                  disabled={loading}
                >
                  Close
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      {loading && (
        <div className="mb-3">
          <h6>Uploading...</h6>
          <ProgressBar animated now={progress} />
        </div>
      )}
    </>
  );
};
