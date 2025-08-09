import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // Store overall game status, which is one of: running | won | lost
  const [gameStatus, setGameStatus] = React.useState('running');
  // Store all guesses made.
  const [guesses, setGuesses] = React.useState([]);

  // Process and add an incoming guess to the array of guesses.
  function handleSubmitGuess(tentativeGuess) {
    // Update the guess list
    const nextGuesses = [...guesses, tentativeGuess]
    setGuesses(nextGuesses);

    // Determine if we have a winning guess.
    if ( tentativeGuess.toUpperCase() === answer ) { 
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED ) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput 
        gameStatus={gameStatus} 
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameStatus === 'won' && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
