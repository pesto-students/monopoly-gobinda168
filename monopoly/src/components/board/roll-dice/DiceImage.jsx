import React from "react";

export const DiceImage = ({ dice }) => {
  return <img src={`/assets/${dice}.png`} alt="dice" className="dice"/>;
};
