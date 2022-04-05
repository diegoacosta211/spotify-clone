import {
  Box,
  Flex,
  Input,
  Button,
  FormControl,
  FormLabel,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSWRConfig } from "swr";
import { auth } from "@/lib/mutation";
import { FC, useState } from "react";
import { Logo } from "icons/Index";
import { MutationBody, Mode } from "@/types/index";

const AuthForm: FC<{ mode: Mode }> = ({ mode }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (evt) => {
    const body: MutationBody = {
      email,
      password,
    };
    evt.preventDefault();
    setIsLoading(true);
    if (mode === "signup") {
      body.name = name;
      body.lastName = lastName;
    }

    await auth(mode, body);
    router.push("/");
    // const data = await res.json();
    // console.log(data);
    setIsLoading(false);
  };

  return (
    <Box height="100vh" width="100vw" bgColor="black" color="white">
      <Flex justifyContent="center" alignItems="center" py={12}>
        <Logo
          w="100%"
          maxW="140px"
          height="auto"
          color="red"
          sx={{
            "&:hover path": {
              fill: "green.300",
              transition: "all .3s",
            },
          }}
        />
      </Flex>
      <Flex justifyContent="center" alignItems="flex-start">
        <Box padding="12" bgColor="gray.900" borderRadius="6px">
          <form onSubmit={handleSubmit}>
            <VStack spacing={3}>
              {mode === "signup" ? (
                <>
                  <FormControl>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="lastname">Last Name</FormLabel>
                    <Input
                      id="lastname"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </FormControl>
                </>
              ) : null}
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Button
                type="submit"
                isLoading={isLoading}
                bgColor="green.500"
                color="gray.900"
                _hover={{ backgroundColor: "green.600", color: "gray.900" }}
              >
                {mode === "signup" ? "Sign Up" : "Sign In"}
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;
