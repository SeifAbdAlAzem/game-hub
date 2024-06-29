import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { GamePlatform } from "../hooks/usePlatform";

interface PlatformSelectorProps {
  onSelectPlatform: (platform: GamePlatform) => void;
  selectedPlatform: GamePlatform | null;
}

const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatform,
}: PlatformSelectorProps) => {
  const { data, error } = usePlatform();
  if (error) return null;

  return (
    <Menu aria-label="Platforms" variant="filled">
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Select Platform"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
