import React from 'react';

function GuessField() {
  const [guess, setGuess] = React.useState('');

  return (
    <form 
    class="guess-input-wrapper"
    onSubmit={(event) => {
      // Prevent default form action
      event.preventDefault();
      // Verify the submitted string is exactly 5 characters
      // We take care of this using the pattern input attribute instead
      // if( guess.length !== 5 ) {
      //   return;
      // }
      // Log out submitted value
      console.log(guess);
      // Clear the form
      setGuess('');
    }}>
      <label htmlFor="guess-field">
        Enter guess:
      </label>
      <input id="name-field"
        maxlength="5"
        pattern="\w{5}"
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
