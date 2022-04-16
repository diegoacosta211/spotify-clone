import { Box, Stack, Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { FC, ReactElement } from "react";

type GradientLayoutType = {
  color: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  roundImage: boolean;
  children: ReactElement;
};

const GradientLayout: FC<GradientLayoutType> = ({
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
      <Stack p={8} direction="row" spacing="6" bg={`${color}.600`}>
        <Image
          src={image}
          borderRadius={`${roundImage ? "full" : "3px"}`}
          width="190px"
          boxShadow="2xl"
          alt={title}
        />
        <Box alignSelf="flex-end">
          <Text
            fontSize="sm"
            color="white"
            textTransform="uppercase"
            fontWeight="700"
            mb={2}
          >
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
          <Text fontSize="sm" color="whiteAlpha.700">
            {description}
          </Text>
        </Box>
      </Stack>
      {children}
    </Box>
  );
};

export default GradientLayout;
