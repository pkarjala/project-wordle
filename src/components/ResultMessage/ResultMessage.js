import React from 'react';

function ResultMessage({gameResult, guessCount, answer}) {
  if( gameResult === 1) {
    return (
      <p>
        <strong>Congratulations!</strong> Got it in <strong>{guessCount} guesses</strong>.
      </p>
    );
  } else if (gameResult === 2) {
    return (
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    );
  }
}

export default ResultMessage;
