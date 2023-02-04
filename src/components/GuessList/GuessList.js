import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function EmptyGuessWord() {
  return (
    <p className="guess">
      {range(0, 5).map((_, index) => (
        <span className="cell" key={index}>
          {" "}
        </span>
      ))}
    </p>
  );
}

function GuessWord({ word, answer }) {
  const wordWithMetadata = checkGuess(word, answer);
  return (
    <p className="guess">
      {wordWithMetadata.map(({ letter, status }, index) => (
        <span className={`cell ${status}`} key={index}>
          {letter}
        </span>
      ))}
    </p>
  );
}

function GuessList({ guesses, answer }) {
  return (
    <div className="guess-results">
      {guesses?.map((guess, index) => (
        // index safe, no reordering
        <GuessWord word={guess} answer={answer} key={index} />
      ))}
      {range(0, NUM_OF_GUESSES_ALLOWED - guesses?.length ?? 0).map(
        (_, index) => (
          <EmptyGuessWord key={index} />
        )
      )}
    </div>
  );
}

export default GuessList;
