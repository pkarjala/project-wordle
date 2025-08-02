import React from 'react';

function GuessResults({guessList}) {
  return (
    <div className="guess-results">
      {guessList.map(({guess, id}) => (
        <p className="guess" key={id}>{guess}</p>
      ))}
    </div>
  );
}

export default GuessResults;
