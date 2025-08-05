import React from 'react';

import ResultMessage from '../ResultMessage';

function GuessField({addGuessToList, updateGameState, numOfGuessesMade, answer}) {
  const [guess, setGuess] = React.useState('');
  const [winLoseClass, setWinLoseClass] = React.useState('');
  const [deactivateInput, setDeactivateInput] = React.useState('');
  // const [gameOver, setGameOver] = React.useState(false);
  const [winLoseBlockDisplayState, setWinLoseBlockDisplayState] = React.useState("none");
  const [gameResult, setGameResult] = React.useState('');
  

  // Process the result of either finding the word, or running out of guesses.
  function processWinLoseResult(result) {
    // Deactivate the input of the guess box
    setDeactivateInput("disabled");
    // Check and set the win/lose banner class.
    // Result of 1 is a win, 2 is a loss.
    if( result === 1 ) {
      setWinLoseClass("happy");
    } else if( result === 2) {
      setWinLoseClass("sad");
    }
    // Make the win/lose banner show up.
    setWinLoseBlockDisplayState('');
  }

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={(event) => {
        // Prevent default form action
        event.preventDefault();
        // Log submitted value to console
        // console.log(guess);
        addGuessToList(guess);
        // Check and update the game result.
        let newGameResult = updateGameState(numOfGuessesMade, answer, guess);
        setGameResult(newGameResult);
        // If the newGameResult bit is 
        if ( newGameResult !== 0 ) {
          processWinLoseResult(newGameResult);
        }
        // Clear the form
        setGuess('');
      }}
    >
      <label htmlFor="guess-field">
        Enter guess:
      </label>
      <div className={`${winLoseClass} banner`} display={winLoseBlockDisplayState}>
        <ResultMessage gameResult={gameResult} guessCount={numOfGuessesMade} answer={answer} />
      </div>
      <input id="name-field"
        maxLength="5"
        pattern="\w{5}"
        disabled={deactivateInput}
        value={guess}
        onChange={(event) => {
          // Need to set content to uppercase only
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessField;
