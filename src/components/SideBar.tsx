import { Heading, Box, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreList from "./GenreList";

interface SideBarProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const SideBar = ({ onSelectGenre, selectedGenre }: SideBarProps) => {
  const { error, isLoading } = useGenres();

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
    <Box as="aside">
      <Heading as="h2" fontSize="2xl" mb={3}>
        Genres
      </Heading>
      <GenreList onSelectGenre={onSelectGenre} selectedGenre={selectedGenre} />
    </Box>
  );
};

export default SideBar;
