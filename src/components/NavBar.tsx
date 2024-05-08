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
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface NavBarProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: NavBarProps) => {
  const { toggleColorMode } = useColorMode();
  const secondryTextColor = useColorModeValue("gray.600", "gray.400");
  const SearchRef = useRef<HTMLInputElement>(null);

  return (
    <HStack p={2} spacing="2" color={secondryTextColor}>
      <AspectRatio ratio={1} w={20}>
        <Image src={logo} alt="logo" />
      </AspectRatio>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (SearchRef.current) onSearch(SearchRef.current.value);
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} color="gray.300" />
          <Input
            ref={SearchRef}
            borderRadius={20}
            placeholder="Search games..."
            variant="filled"
          />
        </InputGroup>
      </form>

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
    </HStack>
  );
};

export default NavBar;
