import React from "react";

export const PlayerCounter = ({
  totalPlayers,
  setPlayerDetailsInputEnable,
  setTotalPlayers,
}) => {
  return (
    <div className="gameStart">
      <div className="playerCount">
        <label>Select no of Players</label>
        <input
          className="input"
          type="number"
          name="totalPlayers"
          placeholder=""
          value={totalPlayers}
          max={4}
          min={1}
          onChange={(e) => setTotalPlayers(parseInt(e.target.value))}
        />
      </div>
      <button
        onClick={() => setPlayerDetailsInputEnable(true)}
        className="button"
      >
        Next
      </button>
    </div>
  );
};
