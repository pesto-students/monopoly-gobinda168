import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { getGameBlockById } from "../../../utils/utils";

import "./PlayerDetails.scss";
export const PlayerDetails = () => {
  const {
    players,
    currentPlayer,
    ownedProperties,
    showProperty,
    setShowProperty,
  } = useContext(AppContext);
  const currentPlayerDetails = players[currentPlayer];

  return (
    <div className="players-details">
      {players.map((player, idx) => (
        <div
          key={player.name}
          className={
            currentPlayerDetails.name === player.name
              ? "player currentPlayer"
              : "player"
          }
          style={{
            backgroundColor:
              currentPlayerDetails.name === player.name
                ? player.color
                : "white",
            color: currentPlayerDetails.name !== player.name && player.color,
          }}
        >
          <div className="playerDetails">
            <div className="name">{player.name}</div>
            <div className="balance">{player.balance}</div>
            <div
              className="view"
              style={{ fontSize: "small", fontWeight: 100 }}
              onClick={() => setShowProperty(player.id)}
            >
              View
            </div>
          </div>
          <div className="location">
            <div className="details">
              Location: {getGameBlockById(player.currentPosition).name}
            </div>
          </div>
        </div>
      ))}
      {ownedProperties && showProperty && (
        <div className="properties">
          {Object.entries(ownedProperties)
            .filter(([key, value]) => value === showProperty)
            .map(([key, value]) => (
              <li className="property" key={key}>
                {key}
              </li>
            ))}
        </div>
      )}
    </div>
  );
};
