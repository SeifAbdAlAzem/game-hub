import {
  HStack,
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

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
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
    <Stack as="ul" spacing="5" pt="4">
      {data.map((genre) => (
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
              onClick={() => onSelectGenre(genre)}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
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
