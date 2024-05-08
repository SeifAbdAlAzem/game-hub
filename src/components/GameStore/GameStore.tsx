import { Grid, GridItem, Show } from "@chakra-ui/react";
import SideBar from "../SideBar";
import GameCard from "./GameCard";
import GameHeading from "./GameHeading";
import GameFilter from "./GameFilter";
import { useState } from "react";
import { Genre } from "../../hooks/useGenres";
import { GamePlatform } from "../../hooks/usePlatform";
import NavBar from "../NavBar";

export interface GameQuery {
  genre: Genre | null;
  platform: GamePlatform | null;
  sortOrder: string;
  searchText: string;
}

const GameStore = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleSelectGenre = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
  };

  const handleSelectedPlatform = (platform: GamePlatform) => {
    setGameQuery({ ...gameQuery, platform });
  };

  const handleSortOrder = (sortOrder: string) => {
    setGameQuery({ ...gameQuery, sortOrder });
  };

  const handleSearchInput = (searchText: string) => {
    setGameQuery({ ...gameQuery, searchText });
  };

  return (
    <>
      <NavBar onSearch={handleSearchInput}></NavBar>
      <Grid templateColumns="repeat(6, 1fr)" pt="4" px="6">
        <Show above="lg">
          <GridItem colSpan={1} pr={10}>
            <SideBar
              onSelectGenre={handleSelectGenre}
              selectedGenre={gameQuery.genre}
            ></SideBar>
          </GridItem>
        </Show>

        <GridItem colSpan={{ base: 6, lg: 5 }} pb={10}>
          <GameHeading genreName={gameQuery.genre?.name}></GameHeading>
          <GameFilter
            onSelectPlatform={handleSelectedPlatform}
            onSelectSortOrder={handleSortOrder}
            selectedPlatform={gameQuery.platform}
            sortOrder={gameQuery.sortOrder}
          ></GameFilter>
          <GameCard gameQuery={gameQuery}></GameCard>
        </GridItem>
      </Grid>
    </>
  );
};

export default GameStore;
