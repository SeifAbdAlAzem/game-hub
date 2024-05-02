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

const GameCard = () => {
  const { games } = useGames();

  return (
    <SimpleGrid spacing={10} minChildWidth={300}>
      {games.map((game) => (
        <Card key={game.id}>
          <CardHeader p="0">
            <Image
              src={game.background_image}
              alt={game.name}
              borderRadius="lg"
            />
          </CardHeader>
          <CardBody flexDirection="column">
            <Flex justifyContent="space-between" w="100%">
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
              {/* <Badge variant="subtle" colorScheme="green">
                {card.score}
              </Badge> */}
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
  );
};

export default GameCard;
