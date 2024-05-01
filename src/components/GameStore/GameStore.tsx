import { Grid, GridItem } from "@chakra-ui/react";
import SideBar from "../SideBar";
import GameCard from "./GameCard";
import GameHeading from "./GameHeading";
import GameFilter from "./GameFilter";

const GameStore = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" pt="8" px="6">
      <GridItem colSpan={{ base: 6, lg: 1 }}>
        <SideBar></SideBar>
      </GridItem>

      <GridItem colSpan={{ base: 6, lg: 5 }}>
        <GameHeading></GameHeading>
        <GameFilter></GameFilter>
        <GameCard></GameCard>
      </GridItem>
    </Grid>
  );
};

export default GameStore;
