import React from "react";

function GuessInput({ onGuess, disabled }) {
  const [guess, setGuess] = React.useState("");
  function handleSubmit() {
    if (disabled) {
      return;
    }

    // controlled inputs in react dont trigger validation :(
    if (guess.length < 5 || guess.length > 5) {
      return;
    }
    onGuess(guess);
    setGuess("");
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        required
        minLength={5}
        maxLength={5}
        value={guess}
        disabled={disabled}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
