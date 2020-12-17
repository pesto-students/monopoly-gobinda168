import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { getGameBlock } from "../../../utils/utils";

export const BoardLayout = () => {
  const { players, currentPlayer } = useContext(AppContext);

  return (
    <>
      {getGameBlock.map((block, index) => (
        <div
          className={`${
            block.id > 11 && block.id < 21
              ? "boardLeft"
              : block.id > 31 && block.id <= 40
              ? "boardRight"
              : block.id >= 1 && block.id < 12
              ? "boardBottom"
              : "boardTop"
          } block `}
          key={index}
        >
          <div
            className="color"
            style={{
              backgroundColor: block.color !== "#FFFFFF" && block.color,
              borderBottom:
                block.color !== "#FFFFFF" &&
                (index < 11 || index > 28) &&
                "2px solid black",
              borderLeft:
                block.color !== "#FFFFFF" &&
                (index > 11 || index < 28) &&
                "2px solid black",
            }}
          ></div>
          <div>
            <div>{block.name.toUpperCase()}</div>
            <div className="price-text">
              {block.pricetext.length < 6 && block.pricetext.toLowerCase()}
            </div>
          </div>
          <div
            style={{
              width: index < 11 || index > 28 ? "100%" : ".7rem",
              height: index < 11 || index > 28 ? ".7rem" : "100%",
              backgroundColor:
                players[currentPlayer].currentPosition === block.id
                  ? players[currentPlayer].color
                  : "transparent",
            }}
          ></div>
        </div>
      ))}
    </>
  );
};
