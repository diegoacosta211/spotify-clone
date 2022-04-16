import { Text, Box, Heading } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

const Card = ({ title, description, roundedImage }) => {
  return (
    <Box
      p={4}
      boxShadow="lg"
      bgColor="var(--darkBg)"
      textAlign="center"
      borderRadius={4}
    >
      <Image
        borderRadius={roundedImage ? "full" : "none"}
        src="/artist.jpg"
        boxSize="100"
        alt={title}
        mx="auto"
        mb={3}
      />
      <Heading as="h4" size="sm" color="white">
        {title}
      </Heading>
      <Text color="gray.400">{description}</Text>
    </Box>
  );
};

export default Card;
