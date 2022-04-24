import GradientLayout from "@/components/GradientLayout";
import Card from "@/components/Card";
import { NextPage } from "next";
import prisma from "@/lib/prisma";
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/layout";
import { useMe } from "@/lib/hooks";
import { HomeProps } from "@/types/index";

const Home: NextPage<HomeProps> = ({ data }) => {
  const { user, isLoading } = useMe();
  return (
    <GradientLayout
      color="green"
      title={`${user?.name} ${user?.lastName}`}
      isLoading={isLoading}
      subtitle="Profile"
      description={`${user?.playlistCount} public playlists`}
      roundImage
      image="https://i.scdn.co/image/ab6775700000ee85b51b31dbdbdba5f4302757e8"
    >
      <Box p={8}>
        <Box mb={5}>
          <Heading as="h3" size="md" color="gray.200">
            Top Artists this Month
          </Heading>
          <Text color="gray.400">Only visible to you</Text>
        </Box>
        <Grid templateColumns="repeat(auto-fill, minmax(130px, 1fr))" gap={4}>
          {data.map((artist) => (
            <GridItem>
              <Card
                title={artist.name}
                description="Artist"
                key={artist.id}
                roundedImage
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </GradientLayout>
  );
};

export async function getServerSideProps() {
  const data = await prisma.artist.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return {
    props: {
      data,
    },
  };
}

export default Home;
