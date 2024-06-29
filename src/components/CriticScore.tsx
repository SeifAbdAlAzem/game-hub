import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  const color = score >= 90 ? "green" : score >= 80 ? "yellow" : "red";

  return (
    <Badge variant="subtle" colorScheme={color} borderRadius="6px" p="4px 10px">
      {score}
    </Badge>
  );
};

export default CriticScore;
