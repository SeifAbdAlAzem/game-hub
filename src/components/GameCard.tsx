import {
  Card,
  CardBody,
  Flex,
  Heading,
  CardHeader,
  CardFooter,
  Image,
} from "@chakra-ui/react";
import { Game } from "../entities/Game";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";
import { Link } from "react-router-dom";

interface GameCardsProps {
  game: Game;
}

const GameCard = ({ game }: GameCardsProps) => {
  return (
    <Link to={`/games/${game.slug}`}>
      <Card>
        <CardHeader p="0">
          <Image
            src={getCroppedImageUrl(game.background_image)}
            alt={game.name}
            borderRadius="lg"
          />
        </CardHeader>

        <CardBody flexDirection="column">
          <Flex justifyContent="space-between" w="100%">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </Flex>
          <Heading as="h3" fontSize={32} mt="5">
            {game.name}
          </Heading>
        </CardBody>

        <CardFooter pt="0">
          <Emoji rating={game.rating_top}></Emoji>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default GameCard;
