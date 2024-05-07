import { Grid, GridItem, Show } from "@chakra-ui/react";
import SideBar from "../SideBar";
import GameCard from "./GameCard";
import GameHeading from "./GameHeading";
import GameFilter from "./GameFilter";
import { useState } from "react";
import { Genre } from "../../hooks/useGenres";

const GameStore = () => {
  const [genreName, setGenreName] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const handleSelectGenre = (genre: Genre) => {
    setGenreName(genre.name);
    setSelectedGenre(genre);
  };

  return (
    <Grid templateColumns="repeat(6, 1fr)" pt="8" px="6">
      <Show above="lg">
        <GridItem colSpan={1} pr={10}>
          <SideBar onSelectGenre={handleSelectGenre}></SideBar>
        </GridItem>
      </Show>

      <GridItem colSpan={{ base: 6, lg: 5 }} pb={10}>
        <GameHeading genreName={genreName}></GameHeading>
        <GameFilter></GameFilter>
        <GameCard selectedGenre={selectedGenre}></GameCard>
      </GridItem>
    </Grid>
  );
};

export default GameStore;
