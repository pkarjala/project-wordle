import React from 'react';

import Banner from '../Banner';

function WonBanner({ numOfGuesses, restartGame }) {
  return (
    <Banner status="happy" action={restartGame}>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses}`}
        </strong>
      </p>
    </Banner>
  );
}

export default WonBanner;
