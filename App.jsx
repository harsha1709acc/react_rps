import React, { useState } from "react";
import Game from "./components/Game";
import History from "./components/History";

function App() {
  const [rounds, setRounds] = useState(0);
  const [history, setHistory] = useState([]);
  const [streak, setStreak] = useState(0);
  const [result, setResult] = useState("");
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");

  const choices = ["Rock", "Paper", "Scissors"];

  const getComputerChoice = () => {
    return choices[Math.floor(Math.random() * 3)];
  };

  const getWinner = (player, computer) => {
    if (player === computer) return "Draw";
    if (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Paper" && computer === "Rock") ||
      (player === "Scissors" && computer === "Paper")
    ) {
      return "You Win";
    }
    return "Computer Wins";
  };

  const handlePlay = (choice) => {
    const computer = getComputerChoice();
    const winner = getWinner(choice, computer);

    setPlayerChoice(choice);
    setComputerChoice(computer);
    setResult(winner);
    setRounds(prev => prev + 1);

    const newRound = { player: choice, computer, result: winner };
    setHistory(prev => [newRound, ...prev]);

    if (winner === "You Win") {
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }
  };

  const handleReset = () => {
    setRounds(0);
    setHistory([]);
    setStreak(0);
    setResult("");
    setPlayerChoice("");
    setComputerChoice("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Rock Paper Scissors</h1>

      <Game
        choices={choices}
        onPlay={handlePlay}
        playerChoice={playerChoice}
        computerChoice={computerChoice}
        result={result}
        rounds={rounds}
        streak={streak}
      />

      <button onClick={handleReset}>Reset Game</button>

      <History history={history} rounds={rounds} />
    </div>
  );
}

export default App;
