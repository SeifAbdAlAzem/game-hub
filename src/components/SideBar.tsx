import { Heading, Box, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreList from "./GenreList";

interface SideBarProps {
  onSelectGenre: (genreId: Genre) => void;
  selectedGenreId?: number;
}

const SideBar = ({ onSelectGenre, selectedGenreId }: SideBarProps) => {
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
      <GenreList
        onSelectGenre={onSelectGenre}
        selectedGenreId={selectedGenreId}
      />
    </Box>
  );
};

export default SideBar;
