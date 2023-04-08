import React, { useEffect, useState } from "react";

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing="1rem">
        {isLoading
          ? skeletons.map((skeleton) => (
              <GameCardContainer>
                <GameSkeleton key={skeleton} />
              </GameCardContainer>
            ))
          : games.map((game) => {
              return (
                <GameCardContainer>
                  <GameCard key={game.id} game={game} />
                </GameCardContainer>
              );
            })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
