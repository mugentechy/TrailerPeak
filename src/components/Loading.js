import React from 'react';
import { SpinnerWrapper } from '../assets/loading';

export default function Loading({ ...restProps }) {
  const randomImage = Math.floor(Math.random() * 4) + 1;

  return (
    <SpinnerWrapper {...restProps}>
      <div className="spinner-container">
        <div className="spinner"></div>
        <img className="picture" src={`/images/users/${randomImage}.png`} alt="User" />
      </div>
    </SpinnerWrapper>
  );
}
