import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <Badge borderRadius="4px" colorScheme={score > 75 ? "green" : "yellow"}>
      {score}
    </Badge>
  );
};

export default CriticScore;
