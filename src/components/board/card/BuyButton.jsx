import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { getGameBlockById } from "../../../utils/utils";
import { toast } from "react-toastify";

export const BuyButton = ({ currentPosition }) => {
  const gameBlock = getGameBlockById(currentPosition);
  const {
    currentPlayer,
    players,
    ownedProperties,
    buyProperty,
    updateBalance,
    inJail,
  } = useContext(AppContext);

  const handleTransaction = () => {
    if (gameBlock.id === 11) {
      if (inJail.includes(players[currentPlayer].id))
        return updateBalance(gameBlock.price, "DEDUCT");
      return toast.error("You are not in jail");
    }
    if (ownedProperties[`${gameBlock.name}`]) {
      return toast.error(
        `Property Owned by ${
          players[ownedProperties[`${gameBlock.name}`] - 1].name
        }`
      );
    }
    let newOwnedProperties = { ...ownedProperties };
    newOwnedProperties[`${gameBlock.name}`] = players[currentPlayer].id;
    buyProperty(newOwnedProperties);
    toast.success(
      `${gameBlock.name} now owned by ${players[currentPlayer].name}`
    );
    updateBalance(gameBlock.price, "DEDUCT");
  };

  return (
    <div>
      {gameBlock.price !== "" && (
        <button className="button" onClick={handleTransaction}>
          Spend @ {gameBlock.price}
        </button>
      )}
    </div>
  );
};
