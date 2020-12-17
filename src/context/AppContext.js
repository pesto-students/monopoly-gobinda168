import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
export const AppContext = createContext();
export const AppProvider = (props) => {
  //Player model
  const player = {
    id: "",
    name: "",
    currentPosition: 1,
    balance: 1500,
    color: "",
  };

  //colors for player
  const [colors, setColors] = useState([
    "#f44336",
    "#9c27b0",
    "#2196f3",
    "#ffeb3b",
  ]);

  //total player count
  const [totalPlayers, setTotalPlayers] = useState(1);

  //players global state
  const [players, setPlayers] = useState([]);

  const addPlayer = ({ id, name, color }) => {
    let newPlayer = { ...player };
    newPlayer.id = id;
    newPlayer.name = name;
    newPlayer.color = color;
    // console.log(newPlayer);

    setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
    toast.success(`Player ${name} added`);
  };
  //update player's balance
  const updateBalance = (amount, type = "ADD") => {
    const newPlayers = [...players];
    if (type === "DEDUCT") {
      if (newPlayers[currentPlayer].balance < amount) return;
      return (newPlayers[currentPlayer].balance -= amount);
    }
    newPlayers[currentPlayer].balance += amount;

    setPlayers([...newPlayers]);
  };

  const setCurrentPosition = (newPosition, type) => {
    let updatedPlayers = [...players];
    if (newPosition === 0) {
      updatedPlayers[currentPlayer].currentPosition = 0;
    } else updatedPlayers[currentPlayer].currentPosition += newPosition;
    setPlayers([...updatedPlayers]);
  };

  //Current player state
  const [currentPlayer, setCurrentPlayer] = useState(0);

  const [inJail, setInJail] = useState([]);
  //Selected Card
  const [selectedCard, setSelectedCard] = useState(null);

  //buy properly
  const [ownedProperties, setOwnedProperties] = useState({});
  const buyProperty = (propertyData) => {
    setOwnedProperties(propertyData);
  };
  const [showProperty, setShowProperty] = useState(null);

  return (
    <AppContext.Provider
      value={{
        totalPlayers,
        setTotalPlayers,
        players,
        addPlayer,
        updateBalance,
        currentPlayer,
        setCurrentPlayer,
        setCurrentPosition,
        colors,
        setColors,
        selectedCard,
        setSelectedCard,
        ownedProperties,
        buyProperty,
        inJail,
        setInJail,
        showProperty,
        setShowProperty,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
