import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

function Game() {
  // Store the current answer
  const [answer, setAnswer] = React.useState(sample(WORDS));
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });
  // Store all guesses made.
  const [guesses, setGuesses] = React.useState([]);
  // Store overall game status, which is one of: running | won | lost
  const [gameStatus, setGameStatus] = React.useState('running');

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

  // Reset the game state and set a new answer.
  function restartGame() {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGameStatus('running');
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput 
        gameStatus={gameStatus} 
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameStatus === 'won' && <WonBanner numOfGuesses={guesses.length} restartGame={restartGame} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} restartGame={restartGame} />}
    </>
  );
}

export default Game;
