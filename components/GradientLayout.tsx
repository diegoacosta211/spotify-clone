import { Box, Stack, Heading, Text } from "@chakra-ui/layout";
import { Image, Skeleton } from "@chakra-ui/react";
import { FC } from "react";
import { GradientLayoutType } from "../types";

const GradientLayout: FC<GradientLayoutType> = ({
  color,
  image,
  title,
  subtitle,
  description,
  roundImage,
  isLoading,
  children,
}) => {
  return (
    <Box
      height="100vh"
      overflowY="auto"
      bgGradient={`linear-gradient(to bottom, ${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,.95) 75%)`}
    >
      <Stack p={8} direction="row" spacing="6" bg={`${color}.600`}>
        <Skeleton isLoaded={!isLoading} rounded="full">
          <Image
            src={image}
            borderRadius={`${roundImage ? "full" : "3px"}`}
            width="190px"
            boxShadow="2xl"
            alt={title}
          />
        </Skeleton>
        <Box alignSelf="flex-end">
          <Skeleton isLoaded={!isLoading}>
            <Text
              fontSize="sm"
              color="white"
              textTransform="uppercase"
              fontWeight="700"
              mb={2}
            >
              {subtitle}
            </Text>
          </Skeleton>
          <Skeleton isLoaded={!isLoading}>
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
          </Skeleton>
          <Skeleton isLoaded={!isLoading}>
            <Text fontSize="sm" color="whiteAlpha.700">
              {description}
            </Text>
          </Skeleton>
        </Box>
        {/* )} */}
      </Stack>
      {children}
    </Box>
  );
};

export default GradientLayout;
