import 'cropperjs/dist/cropper.css';
import React, { useRef } from 'react';
import Cropper from 'react-cropper';

export const PhotoWidgetCropper = ({ setImage, imagePreview }) => {
  const cropperRef = useRef(null);

  const onCrop = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;

    if (!imageElement || !cropper) {
      return;
    }

    cropper?.getCroppedCanvas().toBlob((blob) => {
      setImage(blob);
    }, 'image/jpeg');
  };

  return (
    <Cropper
      ref={cropperRef}
      crop={onCrop}
      src={imagePreview}
      style={{ height: 200, width: '100%' }}
      initialAspectRatio={1}
      aspectRatio={1}
      guides={true}
      viewMode={1}
      dragMode='move'
      scalable={true}
      cropBoxMovable={true}
      cropBoxResizable={true}
      minCropBoxHeight={200}
      minCropBoxWidth={200}
      preview='.img-preview'
    />
  );
};
