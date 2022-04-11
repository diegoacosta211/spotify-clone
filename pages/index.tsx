import { Text } from "@chakra-ui/layout";
import StackedContent from "@/components/StackedContent";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <StackedContent
      color="red"
      title="Diego Acosta"
      subtitle="Profile"
      description="Sarasa blah blah blah"
      roundImage
      image="https://i.scdn.co/image/ab6775700000ee85b51b31dbdbdba5f4302757e8"
    >
      <Text>Sarasa</Text>
    </StackedContent>
  );
};

export default Home;
