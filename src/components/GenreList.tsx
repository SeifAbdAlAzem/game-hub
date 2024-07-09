import {
  HStack,
  Image,
  Box,
  Stack,
  Spinner,
  Button,
  Badge,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import NoImagePlaceholder from "../assets/no-image-placeholder.webp";
import getCroppedImageUrl from "../services/image-url";
import useGameStore from "../store";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const setGenreId = useGameStore((s) => s.setGenreId);
  const selectedGenreId = useGameStore((s) => s.gameQuery.genreId);

  if (error) {
    return <Box as="aside">Error: {error.message}</Box>;
  }

  if (isLoading) {
    return (
      <Box as="aside">
        <Spinner />
      </Box>
    );
  }

  return (
    <Stack as="ul" spacing="5" pt="4">
      {data?.results.map((genre) => (
        <HStack
          as="li"
          spacing="2"
          alignItems="center"
          justifyContent="space-between"
          key={genre.id}
        >
          <Box display="flex" alignItems="center">
            <Image
              src={
                genre.image_background
                  ? getCroppedImageUrl(genre.image_background)
                  : NoImagePlaceholder
              }
              boxSize="32px"
              borderRadius={8}
              mr={2}
              objectFit="cover"
            />
            <Button
              variant="link"
              textAlign="left"
              onClick={() => setGenreId(genre.id)}
              fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
              whiteSpace="normal"
            >
              {genre.name}
            </Button>
          </Box>
          <Badge borderRadius="6px" p={1}>
            {genre.games_count}
          </Badge>
        </HStack>
      ))}
    </Stack>
  );
};

export default GenreList;
