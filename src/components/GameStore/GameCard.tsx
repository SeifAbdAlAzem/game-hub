import {
  Card,
  CardBody,
  SimpleGrid,
  Image,
  HStack,
  Flex,
  Heading,
  CardHeader,
  Icon,
  Text,
  Badge,
} from "@chakra-ui/react";
import useGames, { Platform } from "../../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import getCroppedImageUrl from "../../services/image-url";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "./GameStore";

interface GameCardsProps {
  gameQuery: GameQuery;
}
interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms = [] }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

const GameCard = ({ gameQuery }: GameCardsProps) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid spacing={10} minChildWidth={300}>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}

        {data.map((game) => (
          <Card key={game.id}>
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
                <Badge
                  variant="subtle"
                  colorScheme={
                    game.metacritic >= 90
                      ? "green"
                      : game.metacritic >= 80
                      ? "yellow"
                      : "red"
                  }
                  borderRadius="6px"
                  p="4px 10px"
                >
                  {game.metacritic}
                </Badge>
              </Flex>
              <Heading as="h3" fontSize={32} mt="5">
                {game.name}
              </Heading>
            </CardBody>
            {/* <CardFooter pt="0">
            <Image src={card.popular} w={10} />
          </CardFooter> */}
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameCard;
