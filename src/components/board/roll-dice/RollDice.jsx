import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../../../context/AppContext";
import { rollDice } from "../../../utils/rollDice";
import { DiceImage } from "./DiceImage";
import "./rollDice.scss";
export const RollDice = () => {
  const {
    currentPlayer,
    setCurrentPlayer,
    players,
    setCurrentPosition,
    updateBalance,
    selectedCard,
    setSelectedCard,
    inJail,
    setInJail,
    setShowProperty,
  } = useContext(AppContext);
  //state of dices
  const [dices, setDices] = useState([1, 1]);
  const [diceRolled, setDiceRolled] = useState(false);

  //get random value from dice roll and store it into dices state
  const getDices = () => {
    if (diceRolled) return;
    const dicesArray = rollDice();
    setDices([...dicesArray]);
    setDiceRolled(true);
    const newPosition = dicesArray[0] + dicesArray[1];
    if (currentPosition + newPosition < 41) {
      if (currentPosition + newPosition === 31) {
        setInJail([...inJail, currentPlayer]);
        setCurrentPosition(0);
        setCurrentPosition(11);
      } else setCurrentPosition(newPosition);
    } else {
      const remainingSteps = currentPosition + newPosition - 40;
      setCurrentPosition(newPosition - remainingSteps);
      setCurrentPosition(0);
      toast.success("Collected $200 from bank");

      updateBalance(200, "ADD");
      setCurrentPosition(remainingSteps);
    }
  };

  //end player turn
  const endTurn = () => {
    if (!diceRolled) return;
    setShowProperty(null);
    //if there is a selected chance or community card set it to null after endturn
    if (selectedCard !== null) setSelectedCard(null);

    //allow user to roll dices again
    setDiceRolled(false);

    if (currentPlayer < players.length - 1 && currentPlayer >= 0)
      setCurrentPlayer((previousPlayer) => previousPlayer + 1);
    else setCurrentPlayer(0);
  };

  const { currentPosition } = players[currentPlayer];

  return (
    <div className="rollDice">
      <img src="/assets/game.png" alt="logo" width="80%" />
      <div className="dices">
        <DiceImage dice={dices[0]} />
        <DiceImage dice={dices[1]} />
      </div>
      {!diceRolled ? (
        <button className="button" onClick={getDices}>
          Roll Dice
        </button>
      ) : (
        <button className="button" onClick={endTurn}>
          End Turn
        </button>
      )}
    </div>
  );
};
