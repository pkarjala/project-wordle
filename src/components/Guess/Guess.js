import React from 'react';

import { range } from '../../utils';

function Guess({guessList, indexOfGuess}) {
  // Parse out the specifically guessed word.
  const guessedWord = guessList[indexOfGuess];
  if(guessedWord === undefined) {
    return (
      <p className="guess" key={Math.random()}>
        {range(5).map((num) => (
          <span className="cell"></span>
        ))}
      </p>
    );
  } else {
    return(
      <p className="guess" key={guessedWord.id}>
        {[...guessedWord.guess].map((letter) => (
          <span className="cell">{letter}</span>
        ))}
      </p>
    )
  }
}

export default Guess;
