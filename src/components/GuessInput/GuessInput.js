import React from 'react';

function GuessInput({ gameStatus, handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  // Process submission of the form.
  function handleSubmit(event) {
    // Prevent the default form submission event from occurring.
    event.preventDefault();
    // NOTE:  Logging with {} instead of the raw variable logs out the
    // object for easier visual parsing.
    // console.log({tentativeGuess});
    // Add our guess to the array guesses.
    handleSubmitGuess(tentativeGuess);
    // Reset the guess field value.
    setTentativeGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        disabled={gameStatus !== 'running'}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
