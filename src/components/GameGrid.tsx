import React, { useEffect, useState } from "react";

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data: games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3}>
        {isLoading
          ? skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameSkeleton />
              </GameCardContainer>
            ))
          : games.map((game) => {
              return (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              );
            })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
