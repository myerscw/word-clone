import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { GameEndToast, GameLostMessage, GameWonMessage } from "../GameEndToast";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [gameEndState, setGameEndState] = React.useState("");
  function handleGuess(guess) {
    const newGuesses = [...guesses, guess];

    setGuesses(newGuesses);

    if (guess === answer) {
      setGameEndState("won");
      return;
    }

    if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameEndState("lost");
    }
  }

  React.useEffect(() => {
    console.info({ answer });
  }, [answer]);

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <GuessInput onGuess={handleGuess} disabled={gameEndState !== ""} />
      {gameEndState !== "" ? (
        <GameEndToast
          className={gameEndState === "won" ? "happy" : "sad"}
          resetGame={() => {
            setAnswer(sample(WORDS));
            setGuesses([]);
            setGameEndState("");
          }}
        >
          {gameEndState === "won" ? (
            <GameWonMessage guessCount={guesses.length} />
          ) : (
            <GameLostMessage answer={answer} />
          )}
        </GameEndToast>
      ) : null}
    </>
  );
}

export default Game;
