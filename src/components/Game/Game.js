import React from 'react';

import GuessField from '../GuessField';
import GuessResults from '../GuessResults';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  // Adss a new guess to the guess list.
  function addGuessToList(guess) {
    const newGuess = {
      guess,
      id: Math.random()
    }
    const newGuessList = [...guessList, newGuess];
    setGuessList(newGuessList);
    // Post setting action here to update game state to prevent further guesses?
  }

  return (
    <>
      <GuessResults guessList={guessList} numGuessesAllowed={NUM_OF_GUESSES_ALLOWED} />
      <GuessField addGuessToList={addGuessToList} />
    </>
  );
}

export default Game;
