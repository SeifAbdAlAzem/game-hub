import {
  HStack,
  Heading,
  StackProps,
  Image,
  Text,
  Box,
  Stack,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const GameItem = ({ children, ...rest }: StackProps) => {
  return (
    <HStack as="li" spacing="2" {...rest} align="flex-start">
      <Image src={logo} w="22px" h="22px" />
      <Text textAlign="left">{children}</Text>
    </HStack>
  );
};

const SideBar = () => {
  const gamesGenre: string[] = [
    "Action",
    "Adventure",
    "RPG",
    "Strategy",
    "Shooter",
    "Casual",
    "Indie",
  ];

  return (
    <Box as="aside">
      <Heading as="h2" fontSize="3xl">
        Genres
      </Heading>
      <Stack as="ul" spacing="5" pt="4">
        {gamesGenre.map((genre) => (
          <GameItem>{genre}</GameItem>
        ))}
      </Stack>
    </Box>
  );
};

export default SideBar;

// import {
//   HStack,
//   Heading,
//   Image,
//   Box,
//   Stack,
//   Spinner,
//   ListItem,
//   Button,
// } from "@chakra-ui/react";
// import useGenres, { Genre } from "../hooks/useGenres";
// import getCroppedImageUrl from "../services/image-url";

// interface Props {
//   onSelectGenre: (genre: Genre) => void;
//   selectedGenre: Genre | null;
// }

// const GameItem = ({
//   genre,
//   onSelectGenre,
//   selectedGenre,
// }: {
//   genre: Genre;
//   onSelectGenre: (genre: Genre) => void;
//   selectedGenre: Genre | null;
// }) => (
//   <ListItem key={genre.id} paddingY="5px">
//     <HStack spacing="5" align="flex-start">
//       <Image
//         boxSize="32px"
//         borderRadius={8}
//         objectFit="cover"
//         src={getCroppedImageUrl(genre.image_background)}
//       />
//       <Button
//         whiteSpace="normal"
//         textAlign="left"
//         fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
//         onClick={() => onSelectGenre(genre)}
//         fontSize="md"
//         variant="link"
//       >
//         {genre.name}
//       </Button>
//     </HStack>
//   </ListItem>
// );

// const SideBar = ({ onSelectGenre, selectedGenre }: Props) => {
//   const { data, isLoading, error } = useGenres();

//   if (error) return null;

//   if (isLoading) return <Spinner />;

//   return (
//     <Box as="aside">
//       <Heading>Genres</Heading>
//       <Stack as="ul" spacing="5" pt="6">
//         {data.map((genre) => (
//           <GameItem
//             key={genre.id}
//             genre={genre}
//             onSelectGenre={onSelectGenre}
//             selectedGenre={selectedGenre}
//           />
//         ))}
//       </Stack>
//     </Box>
//   );
// };

// export default SideBar;
