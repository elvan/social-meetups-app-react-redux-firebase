import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaCloudUploadAlt } from 'react-icons/fa';

export const PhotoWidgetDropzone = ({ setFiles }) => {
  const dropzoneStyles = {
    border: 'dashed 3px',
    borderColor: '#eee',
    borderRadius: '5px',
    paddingTop: '30px',
    height: '200px',
  };

  const dropzoneActiveStyle = {
    borderColor: 'dashed 3px green',
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    [setFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      className='text-center'
      style={
        isDragActive
          ? { ...dropzoneStyles, ...dropzoneActiveStyle }
          : dropzoneStyles
      }
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <>
          <p>Drag 'n' drop an image here, or click to a select file</p>
          <FaCloudUploadAlt size={48} />
        </>
      )}
    </div>
  );
};
