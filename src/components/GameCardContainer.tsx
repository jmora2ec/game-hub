import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box minWidth="240px" overflow="hidden" borderRadius="8px">
      {children}
    </Box>
  );
};

export default GameCardContainer;
