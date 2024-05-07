import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../../hooks/usePlatform";

const GameFilter = () => {
  const { data } = usePlatform();

  return (
    <HStack spacing={2} my={5}>
      <Menu aria-label="Platforms" variant="filled">
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Select Platform
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem key={platform.id}>{platform.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
      <Select
        placeholder="Order by: Relevance"
        aria-label="Order"
        variant="filled"
        w="fit-content"
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </HStack>
  );
};

export default GameFilter;
