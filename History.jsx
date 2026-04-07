import React from "react";

function History({ history, rounds }) {
  return (
    <div>
      <h2>Move History</h2>
      <ul style={{ listStyle: "none" }}>
        {history.map((round, index) => (
          <li key={index}>
            Round {rounds - index}: You - {round.player} | Computer - {round.computer} → {round.result}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;icePixelRatio
