import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import GameHeading from "./components/GameHeading";
import GameGrid from "./components/GameGrid";
import GameFilter from "./components/GameFilter";

const App = () => {
  return (
    <>
      <NavBar />
      <Grid templateColumns="repeat(6, 1fr)" pt="4" px="6">
        <Show above="lg">
          <GridItem colSpan={1} pr={10}>
            <SideBar></SideBar>
          </GridItem>
        </Show>

        <GridItem colSpan={{ base: 6, lg: 5 }} pb={10}>
          <GameHeading />
          <GameFilter></GameFilter>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
