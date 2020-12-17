import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

export const AddPlayer = ({ players, setPlayers }) => {
  const { colors, setColors, totalPlayers } = useContext(AppContext);

  //store player's name
  const [playerName, setPlayerName] = useState("");
  const [colorSelected, setColorSelected] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const updateColor = (color) => {
    if (colorSelected) return;
    let newColors = [...colors].slice(0, totalPlayers);
    newColors = newColors.filter((clr) => clr !== color);
    setColors(newColors);
    setColorSelected(true);
    setSelectedColor(color);
    setPlayers([
      ...players,
      { id: players.length + 1, name: playerName, color: color },
    ]);
  };

  return (
    <div className="addPlayer">
      <input
        className="input"
        type="text"
        placeholder="Enter player name"
        onChange={(e) => setPlayerName(e.target.value)}
      />

      <div className={!selectedColor ? "colors" : "selectedColor"}>
        {!colorSelected ? (
          colors
            .slice(0, totalPlayers)
            .map((color) => (
              <div
                key={color}
                className="color"
                style={{ backgroundColor: color }}
                onClick={() => updateColor(color)}
              ></div>
            ))
        ) : (
          <div
            className="color"
            style={{ backgroundColor: selectedColor }}
          ></div>
        )}
      </div>
    </div>
  );
};
