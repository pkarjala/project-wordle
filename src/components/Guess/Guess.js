import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers'

// Creates a specific cell for the guess being made.
function Cell({ letter, status }) {
  // Veryfiy status has an actual value before setting it as the className.
  const className = status ? `cell ${status}` : 'cell';
  return (
    <span className={className}>{letter}</span>
  )
}

function Guess({ guessedWord, answer }) {
  const result = checkGuess(guessedWord, answer);
  
  return (
    <p className="guess">
      {range(5).map((index) => (
        <Cell 
          key={index} 
          letter={result ? result[index].letter : undefined}
          status={result ? result[index].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
