import {
  Card,
  CardBody,
  CardFooter,
  SimpleGrid,
  Image,
  HStack,
  Flex,
  Badge,
  Heading,
  CardHeader,
} from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import placeHolder from "../../assets/no-image-placeholder.webp";
import bulletsEye from "../../assets/bulls-eye.webp";

const GameCard = () => {
  const cards = [
    {
      img: placeHolder,
      logos: [logo, logo, logo],
      score: 90,
      title: "Grand Theft Auto V",
      popular: bulletsEye,
    },
    {
      img: placeHolder,
      logos: [logo],
      score: 80,
      title: "Watch Dogs",
      popular: bulletsEye,
    },
    {
      img: placeHolder,
      logos: [logo, logo],
      score: 50,
      title: "GTA V",
      popular: bulletsEye,
    },
  ];

  return (
    <SimpleGrid spacing={10} minChildWidth={300}>
      {cards.map((card, index) => (
        <Card key={index}>
          <CardHeader p="0">
            <Image src={card.img} alt={card.title} borderRadius="lg" />
          </CardHeader>
          <CardBody flexDirection="column">
            <Flex justifyContent="space-between" w="100%">
              <HStack>
                {card.logos.map((logo, idx) => (
                  <Image
                    key={idx}
                    src={logo}
                    alt={`Logo ${idx + 1}`}
                    boxSize="20px"
                  />
                ))}
              </HStack>
              <Badge variant="subtle" colorScheme="green">
                {card.score}
              </Badge>
            </Flex>
            <Heading as="h3" fontSize={32} mt="5">
              {card.title}
            </Heading>
          </CardBody>
          <CardFooter pt="0">
            <Image src={card.popular} w={10} />
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default GameCard;
