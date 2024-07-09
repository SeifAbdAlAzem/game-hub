import { Heading, Box, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreList from "./GenreList";

const SideBar = () => {
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
      <GenreList />
    </Box>
  );
};

export default SideBar;
