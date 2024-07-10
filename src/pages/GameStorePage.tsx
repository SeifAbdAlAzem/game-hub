import { Grid, GridItem, Show } from "@chakra-ui/react";
import SideBar from "../components/SideBar";
import GameHeading from "../components/GameHeading";
import GameFilter from "../components/GameFilter";
import GameGrid from "../components/GameGrid";

const GameStorePage = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" pt="4" px="6">
      <Show above="lg">
        <GridItem colSpan={1} pr={10}>
          <SideBar />
        </GridItem>
      </Show>

      <GridItem colSpan={{ base: 6, lg: 5 }} pb={10}>
        <GameHeading />
        <GameFilter />
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default GameStorePage;
