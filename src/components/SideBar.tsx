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
import useGenres, { Genre } from "../hooks/useGenres";
import NoImagePlaceholder from "../assets/no-image-placeholder.webp";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const SideBar = ({ onSelectGenre }: Props) => {
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
        Genre
      </Heading>
      <Stack as="ul" spacing="5" pt="4">
        {data.map((genre) => (
          <HStack
            as="li"
            spacing="2"
            alignItems="center"
            justifyContent="space-between"
            key={genre.id}
          >
            <Box display="flex">
              <Image
                src={
                  genre.image_background
                    ? getCroppedImageUrl(genre.image_background)
                    : NoImagePlaceholder
                }
                boxSize="32px"
                borderRadius={8}
                mr={2}
              />
              <Button
                variant="link"
                textAlign="left"
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name === "Massively Multiplayer"
                  ? "Multiplayer"
                  : genre.name}
              </Button>
            </Box>
            <Badge borderRadius="6px" p={1}>
              {genre.games_count}
            </Badge>
          </HStack>
        ))}
      </Stack>
    </Box>
  );
};

export default SideBar;
