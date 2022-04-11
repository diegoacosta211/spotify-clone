import { Box, Stack, Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { FC, ReactElement } from "react";

type StackedContentType = {
  color: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  roundImage: boolean;
  children: ReactElement;
};

const StackedContent: FC<StackedContentType> = ({
  color,
  image,
  title,
  subtitle,
  description,
  roundImage,
  children,
}) => {
  return (
    <Box
      height="100vh"
      overflowY="auto"
      bgGradient={`linear-gradient(to bottom, ${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,.95) 75%)`}
    >
      <Stack p={8} direction="row" spacing="8" bg={`${color}.600`}>
        <Image
          src={image}
          borderRadius={`${roundImage ? "full" : "3px"}`}
          width="190px"
          boxShadow="2xl"
          alt={title}
        />
        <Box alignSelf="flex-end">
          <Text color="white" textTransform="uppercase" fontWeight="700" mb={2}>
            {subtitle}
          </Text>
          <Heading
            color="white"
            as="h1"
            size="4xl"
            fontWeight="800"
            letterSpacing="-1px"
            mb={4}
          >
            {title}
          </Heading>
          <Text color="whiteAlpha.600">{description}</Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default StackedContent;
