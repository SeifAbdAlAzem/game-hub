import { HStack } from "@chakra-ui/react";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";
import { GamePlatform } from "../hooks/usePlatforms";

interface GameFilterProps {
  onSelectPlatform: (platform: GamePlatform) => void;
  onSelectSortOrder: (sortOrder: string) => void;
  selectedPlatformId?: number;
  sortOrder: string;
}

const GameFilter = ({
  onSelectPlatform,
  onSelectSortOrder,
  selectedPlatformId,
  sortOrder,
}: GameFilterProps) => {
  return (
    <HStack spacing={2} my={5}>
      <PlatformSelector
        onSelectPlatform={onSelectPlatform}
        selectedPlatformId={selectedPlatformId}
      />

      <SortSelector
        onSelectSortOrder={onSelectSortOrder}
        sortOrder={sortOrder}
      />
    </HStack>
  );
};

export default GameFilter;
