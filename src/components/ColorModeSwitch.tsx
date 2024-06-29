import { FormControl, FormLabel, Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <FormControl
      display="flex"
      alignItems="center"
      w="fit-content"
      whiteSpace="nowrap"
    >
      <Switch
        id="dark-mode"
        colorScheme="green"
        onChange={toggleColorMode}
        defaultChecked
        mr={2}
      />
      <FormLabel htmlFor="dark-mode" mb="0">
        Dark Mode
      </FormLabel>
    </FormControl>
  );
};

export default ColorModeSwitch;
