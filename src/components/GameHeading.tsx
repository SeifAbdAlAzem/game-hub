import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameStore from "../store";

const GameHeading = () => {
  const genreId = useGameStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  return (
    <Heading>
      {platform?.name || ""} {genre?.name || ""} Games
    </Heading>
  );
};

export default GameHeading;
