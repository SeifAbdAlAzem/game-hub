import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import GameHeading from "./components/GameHeading";
import GameGrid from "./components/GameGrid";
import GameFilter from "./components/GameFilter";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { GamePlatform } from "./hooks/usePlatform";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleSelectGenre = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genreId: genre.id });
  };

  const handleSelectedPlatform = (platform: GamePlatform) => {
    setGameQuery({ ...gameQuery, platformId: platform.id });
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
              selectedGenreId={gameQuery.genreId}
            ></SideBar>
          </GridItem>
        </Show>

        <GridItem colSpan={{ base: 6, lg: 5 }} pb={10}>
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <GameFilter
            onSelectPlatform={handleSelectedPlatform}
            onSelectSortOrder={handleSortOrder}
            selectedPlatformId={gameQuery.platformId}
            sortOrder={gameQuery.sortOrder}
          ></GameFilter>
          <GameGrid gameQuery={gameQuery}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
