import {
  AspectRatio,
  HStack,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link } from "react-router-dom";

const NavBar = () => {
  const secondryTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <HStack p={2} spacing="2" color={secondryTextColor}>
      <AspectRatio ratio={1} w={20}>
        <Link to={"/"}>
          <Image src={logo} alt="logo" />
        </Link>
      </AspectRatio>

      <SearchInput />

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
