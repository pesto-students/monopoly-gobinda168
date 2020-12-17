import React from "react";
import { BoardLayout } from "./block/BoardLayout";
import { RollDice } from "./roll-dice/RollDice";
import "./board.scss";
import { PlayerDetails } from "./players/PlayerDetails";
import { Card } from "./card/Card";

export const Board = () => {
  return (
    <div className="monopoly-board">
      <BoardLayout />
      <div className="game-center">
        <div className="left">
          <Card />
        </div>
        <div className="center">
          <RollDice />
        </div>
        <div className="right">
          <PlayerDetails />
        </div>
      </div>
    </div>
  );
};
