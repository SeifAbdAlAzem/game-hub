import { HStack, Select } from "@chakra-ui/react";

const GameFilter = () => {
  return (
    <HStack spacing={2} my={5}>
      <Select
        placeholder="Platforms"
        aria-label="Platforms"
        variant="filled"
        w="fit-content"
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
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
