import React from 'react';

const KEYROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
];

// Gets the status of a given letter.
function getStatusByLetter(validatedGuesses) {
  const statusObject = {};
  // Flatten the list of guesses to get the used letters
  const allLetters = validatedGuesses.flat();

  allLetters.forEach(({ letter, status }) => {
    const currentStatus = statusObject[letter];

    if (currentStatus === undefined) {
      statusObject[letter] = status;
      return;
    }

    // The same letter might have multiple matched statuses
    // As such, we want to prioritize statuses.
    const STATUS_RANKS = {
      correct: 1,
      misplaced: 2,
      incorrect: 3,
    };

    const currentStatusRank = STATUS_RANKS[currentStatus];
    const newStatusRank = STATUS_RANKS[status];

    if (newStatusRank < currentStatusRank) {
      statusObject[letter] = status;
    }
  });
  
  return statusObject;
}

// It's not clear to me why this is set as a declared variable function.
const Keyboard = ({ validatedGuesses }) => {
  const statusByLetter = getStatusByLetter(validatedGuesses);

  return (
    <div className="keyboard">
      {KEYROWS.map((row, index) => (
        <div className="keyboard-row" key={index}>
          {row.map((letter) => (
            <div
              key={letter}
              className={`letter ${statusByLetter[letter] || ''}`}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
