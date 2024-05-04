import {
  HStack,
  Heading,
  Image,
  Box,
  Stack,
  Spinner,
  Button,
  Badge,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import NoImagePlaceholder from "../assets/no-image-placeholder.webp";

const GameItem = ({ name, image_background, games_count }: Genres) => {
  return (
    <HStack as="li" spacing="2" align="flex-start">
      <Image src={image_background} w="22px" h="22px" />
      <Button variant="link" textAlign="left">
        {name}
      </Button>
      <Badge>{games_count}</Badge>
    </HStack>
  );
};

const SideBar = () => {
  const { data, error, isLoading } = useGenres();

  {
    error && <Box as="aside">Error: {error}</Box>;
  }

  {
    isLoading && (
      <Box as="aside">
        <Spinner />
      </Box>
    );
  }

  return (
    <Box as="aside">
      <Heading as="h2" fontSize="3xl">
        Genres
      </Heading>
      <Stack as="ul" spacing="5" pt="4">
        {data.map((genre) => (
          <GameItem
            key={genre.id}
            name={genre.name}
            image_background={genre.image_background || NoImagePlaceholder}
            games_count={genre.games_count}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default SideBar;
