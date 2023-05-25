import React from 'react';
import { CircularText } from '../assets/icons';

const SpinText = () => {
  return (
    <div className=" flex align-center justify-center">
      <div className="w-[120px] h-auto flex items-center justify-center relative">
        <CircularText className="animate-spin-slow" />
      </div>
    </div>
  );
};

export default SpinText;
