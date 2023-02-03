import React from 'react';

import './Loading.css';

export const Loading = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: '50vh' }}
    >
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
