import { Heading } from "@chakra-ui/react";
import { GameQuery } from "./GameStore";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  return (
    <Heading>
      {gameQuery.platform?.name || ""} {gameQuery.genre?.name || ""} Games
    </Heading>
  );
};

export default GameHeading;
