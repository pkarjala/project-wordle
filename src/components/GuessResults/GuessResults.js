import React from 'react';

import { range } from '../../utils';
import Guess from '../Guess';

function GuessResults({guessList, numGuessesAllowed, answer}) {
  return (
    <div className="guess-results">
      {/* {guessList.map(({guess, id}) => (
        <p className="guess" key={id}>{guess}</p>
      ))} */}

      {range(numGuessesAllowed).map((num) => (
        <Guess guessList={guessList} indexOfGuess={num} answer={answer} key={Math.random()} />
      ))}
    </div>
  );
}

export default GuessResults;
