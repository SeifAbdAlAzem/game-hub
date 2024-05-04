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
import getCroppedImageUrl from "../services/image-url";

const GameItem = ({ name, image_background, games_count }: Genres) => {
  return (
    <HStack
      as="li"
      spacing="2"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box display="flex">
        <Image
          src={getCroppedImageUrl(image_background)}
          boxSize="32px"
          borderRadius={8}
          mr={2}
        />
        <Button variant="link" textAlign="left">
          {name === "Massively Multiplayer" ? "Multiplayer" : name}
        </Button>
      </Box>
      <Badge borderRadius="6px" p={1}>
        {games_count}
      </Badge>
    </HStack>
  );
};

const SideBar = () => {
  const { data, error, isLoading } = useGenres();

  if (error) {
    return <Box as="aside">Error: {error}</Box>;
  }

  if (isLoading) {
    return (
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
