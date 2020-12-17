import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import {
  getChanceCard,
  getcommunityCard,
  getGameBlockById,
} from "../../../utils/utils";
import { BuyButton } from "./BuyButton";
import "./card.scss";
import { DrawButton } from "./DrawButton";
export const Card = () => {
  const { players, currentPlayer, selectedCard, setSelectedCard } = useContext(
    AppContext
  );
  const player = players[currentPlayer];
  const { name, pricetext, price, src } = getGameBlockById(
    player.currentPosition
  );

  const handleDraw = () => {
    if (selectedCard !== null) return;
    if (name === "Community Chest") {
      const card = getcommunityCard();
      setSelectedCard(card);
    }
    const card = getChanceCard();
    setSelectedCard(card);
  };

  return (
    <div className="card">
      <img
        src={src ? src : "/assets/game.png"}
        height="80px"
        width={src ? "auto" : "80%"}
        alt={name}
      />
      <div className="name">Name: {name}</div>
      {(price || pricetext) && (
        <div className="name">
          {selectedCard
            ? selectedCard
            : ` Price: ${pricetext.length > 10 ? pricetext : `$${price}`}`}
        </div>
      )}

      {name === "Community Chest" || name === "Chance" ? (
        <DrawButton drawCard={handleDraw} />
      ) : (
        <BuyButton currentPosition={player.currentPosition} />
      )}
    </div>
  );
};
