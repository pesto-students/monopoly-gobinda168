import gameBlocks from "../data/gameBlocks.json";
import chanceCards from "../data/chanceCards.json";
import communityCards from "../data/communityCards.json";

export const getGameBlock = gameBlocks.reverse();

//get a block by its id
export const getGameBlockById = (id) =>
  getGameBlock.find((gameBlock) => gameBlock.id === id);

//generate chance and community card randomly
export const getChanceCard = () =>
  chanceCards[Math.floor(Math.random() * chanceCards.length)];
export const getcommunityCard = () =>
  communityCards[Math.floor(Math.random() * communityCards.length)];
