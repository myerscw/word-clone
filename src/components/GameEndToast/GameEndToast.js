import React, { useRef } from "react";

export function GameEndToast({ className, children, resetGame }) {
  const btnRef = useRef();

  React.useLayoutEffect(() => {
    btnRef.current?.focus();
  }, []);

  return (
    <section className={`banner ${className}`}>
      {children}
      <button ref={btnRef} onClick={resetGame}>
        Play Again
      </button>
    </section>
  );
}

export function GameWonMessage({ guessCount }) {
  return (
    <p>
      <strong>Congratulations!</strong> Got it in{" "}
      <strong>
        {guessCount} {guessCount === 1 ? "guess" : "guesses"}
      </strong>
    </p>
  );
}

export function GameLostMessage({ answer }) {
  return (
    <p>
      Sorry,The correct answer was <strong>{answer}</strong>.
    </p>
  );
}
