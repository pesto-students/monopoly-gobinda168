import React from "react";

export const DrawButton = ({ drawCard }) => {
  return (
    <div>
      <button className="button" onClick={drawCard}>
        DRAW A CARD
      </button>
    </div>
  );
};
