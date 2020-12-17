import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { AddPlayer } from "./AddPlayer";
import { PlayerCounter } from "./PlayerCounter";
import "./start.scss";
export const Start = ({ setStartGame }) => {
  const { totalPlayers, setTotalPlayers, addPlayer } = useContext(AppContext);

  const [players, setPlayers] = useState([]);
  const [playerDetailsInputEnable, setPlayerDetailsInputEnable] = useState(
    false
  );

  const handleStart = () => {
    players.forEach((player) => addPlayer(player));
    setStartGame(true);
  };

  return (
    <div className="startPage">
      <img src="/assets/logo.png" alt="logo" width="45%" />
      {!playerDetailsInputEnable ? (
        <PlayerCounter
          totalPlayers={totalPlayers}
          setPlayerDetailsInputEnable={setPlayerDetailsInputEnable}
          setTotalPlayers={setTotalPlayers}
        />
      ) : (
        Array(totalPlayers)
          .fill("player")
          .map((player, index) => (
            <AddPlayer players={players} setPlayers={setPlayers} key={index} />
          ))
      )}

      {playerDetailsInputEnable && (
        <button className="button" onClick={handleStart}>
          START
        </button>
      )}
    </div>
  );
};
