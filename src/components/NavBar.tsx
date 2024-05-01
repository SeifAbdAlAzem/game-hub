import { SearchIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Switch,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  const { toggleColorMode } = useColorMode();
  const secondryTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <HStack p={2} spacing="2" color={secondryTextColor}>
      <AspectRatio ratio={1} w={20}>
        <Image src={logo} alt="logo" />
      </AspectRatio>

      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search games..."
          borderRadius={20}
          variant="filled"
        />
      </InputGroup>

      <FormControl display="flex" alignItems="center" w="12%">
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
    </HStack>
  );
};

export default NavBar;
