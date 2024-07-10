import { HStack } from "@chakra-ui/react";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";

const GameFilter = () => {
  return (
    <HStack spacing={2} mt={5} mb={8}>
      <PlatformSelector />

      <SortSelector />
    </HStack>
  );
};

export default GameFilter;
