import React from 'react';

import GuessField from '../GuessField';
import GuessResults from '../GuessResults';
import { sample } from '../../utils';
import { WORDS } from '../../data';

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
  }

  return (
    <>
      <GuessResults guessList={guessList} />
      <GuessField addGuessToList={addGuessToList} />
    </>
  );
}

export default Game;
