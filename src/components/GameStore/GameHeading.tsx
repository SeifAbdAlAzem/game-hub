import { Heading } from "@chakra-ui/react";

interface GameHeadingProps {
  genreName?: string;
}

const GameHeading = ({ genreName }: GameHeadingProps) => {
  return <Heading>{genreName} Games</Heading>;
};

export default GameHeading;
