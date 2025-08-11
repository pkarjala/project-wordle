import React from 'react';

function Banner({ status, children, action }) {
  return (
    <div className={`${status} banner`}>
      {children}
      <button onClick={action}>Restart Game</button>
    </div>
  );
}

export default Banner;
