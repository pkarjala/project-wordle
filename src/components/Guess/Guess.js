import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({guessList, indexOfGuess, answer}) {
  // Parse out the specifically guessed word.
  const guessedWord = guessList[indexOfGuess];
  if(guessedWord === undefined) {
    return (
      <p className="guess" key={Math.random()}>
        {range(5).map((num) => (
          <span className="cell" key={Math.random()}></span>
        ))}
      </p>
    );
  } else {
    const guessResult = checkGuess(guessedWord.guess, answer);
    console.log(guessResult);

    return(
      <p className="guess" key={guessedWord.id}>
        {guessResult.map((result) => (
          <span className={`cell ${result.status}`} key={Math.random()}>{result.letter}</span>
        ))}
      </p>
    )
  }
}

export default Guess;
