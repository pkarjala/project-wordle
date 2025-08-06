import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  // Process submission of the form.
  function handleSubmit(event) {
    // Prevent the default form submission event from occurring.
    event.preventDefault();
    // NOTE:  Logging with {} instead of the raw variable logs out the
    // object for easier visual parsing.
    console.log({guess});
    // Reset the guess field value.
    setGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
