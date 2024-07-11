import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DefinitionItemProps {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: DefinitionItemProps) => {
  return (
    <Box as="dl" marginY={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <Box as="dd">{children}</Box>
    </Box>
  );
};

export default DefinitionItem;
