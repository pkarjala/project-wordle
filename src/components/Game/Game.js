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
  const [numOfGuessesMade, setNumOfGuessesMade] = React.useState(0);

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

  // Updates the state of the game by checking if a winning word was entered.
  function updateGameState(numOfGuessesMade, answer, guess) {
    let newNumOfGuesses = numOfGuessesMade + 1;
    setNumOfGuessesMade(newNumOfGuesses);
    if( answer === guess) {
      // We have a winner!
      // console.log("Winner winner chicken dinner");
      return 1;
    } else if( newNumOfGuesses === NUM_OF_GUESSES_ALLOWED ) {
      // Check if we've exceeded the number of guesses, and set lose state.
      // console.log("Wah Wah Wah, you lose!");
      return 2;
    } else {
      return 0;
    }
  }

  return (
    <>
      <GuessResults guessList={guessList} numGuessesAllowed={NUM_OF_GUESSES_ALLOWED} answer={answer} />
      <GuessField addGuessToList={addGuessToList} updateGameState={updateGameState} numOfGuessesMade={numOfGuessesMade} answer={answer}/>
    </>
  );
}

export default Game;
