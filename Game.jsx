import React from "react";

function Game({
  choices,
  onPlay,
  playerChoice,
  computerChoice,
  result,
  rounds,
  streak,
}) {
  return (
    <div>
      <div>
        {choices.map(choice => (
          <button key={choice} onClick={() => onPlay(choice)}>
            {choice}
          </button>
        ))}
      </div>

      <h2>Round: {rounds}</h2>
      <h2>:fire: Streak: {streak}</h2>

      <h3>Your Choice: {playerChoice}</h3>
      <h3>Computer Choice: {computerChoice}</h3>
      <h2>{result}</h2>
    </div>
  );
}

export default Game;
