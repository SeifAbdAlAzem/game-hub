import { Grid, GridItem, Show } from "@chakra-ui/react";
import SideBar from "../SideBar";
import GameCard from "./GameCard";
import GameHeading from "./GameHeading";
import GameFilter from "./GameFilter";
import { useState } from "react";
import { Genre } from "../../hooks/useGenres";
import { GamePlatform } from "../../hooks/usePlatform";

export interface GameQuery {
  genre: Genre | null;
  platform: GamePlatform | null;
}

const GameStore = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [genreName, setGenreName] = useState("");

  const handleSelectGenre = (genre: Genre) => {
    setGenreName(genre.name);
    setGameQuery({ ...gameQuery, genre });
  };

  const handleSelectedPlatform = (platform: GamePlatform) => {
    setGameQuery({ ...gameQuery, platform });
  };

  return (
    <Grid templateColumns="repeat(6, 1fr)" pt="8" px="6">
      <Show above="lg">
        <GridItem colSpan={1} pr={10}>
          <SideBar
            onSelectGenre={handleSelectGenre}
            selectedGenre={gameQuery.genre}
          ></SideBar>
        </GridItem>
      </Show>

      <GridItem colSpan={{ base: 6, lg: 5 }} pb={10}>
        <GameHeading genreName={genreName}></GameHeading>
        <GameFilter
          onSelectPlatform={handleSelectedPlatform}
          selectedPlatform={gameQuery.platform}
        ></GameFilter>
        <GameCard
          selectedGenre={gameQuery.genre}
          selectedPlatform={gameQuery.platform}
        ></GameCard>
      </GridItem>
    </Grid>
  );
};

export default GameStore;
