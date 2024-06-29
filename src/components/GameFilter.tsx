import { HStack } from "@chakra-ui/react";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";
import { GamePlatform } from "../hooks/usePlatform";

interface GameFilterProps {
  onSelectPlatform: (platform: GamePlatform) => void;
  onSelectSortOrder: (sortOrder: string) => void;
  selectedPlatform: GamePlatform | null;
  sortOrder: string;
}

const GameFilter = ({
  onSelectPlatform,
  onSelectSortOrder,
  selectedPlatform,
  sortOrder,
}: GameFilterProps) => {
  return (
    <HStack spacing={2} my={5}>
      <PlatformSelector
        onSelectPlatform={onSelectPlatform}
        selectedPlatform={selectedPlatform}
      />

      <SortSelector
        onSelectSortOrder={onSelectSortOrder}
        sortOrder={sortOrder}
      />
    </HStack>
  );
};

export default GameFilter;
