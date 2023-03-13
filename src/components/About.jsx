import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import mypic from "./Pictures/proPic.jpeg";

export default function About() {
  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      className="about section"
      margin='auto'
    >
      
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              About Me
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"} id="user-detail-name">
              I am, M Noor Mohammed
            </Text>{" "}
          </Heading>
          <Text color={"black.400"}  fontSize={{ base: "2xl", lg: "3xl" }}>
              Full Stack Web Developer
            </Text>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"gray.500"}
            id="user-detail-intro"
          >
            Passionate about building web applications using front-end and
            backend technologies . I believe in continuous learning and growth.
            Looking forward to work in a challenging work environment.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Contact
            </Button>
            <Button rounded={"full"}>Resume</Button>
          </Stack>
        </Stack>
      </Flex>

      <Flex flex={1} >
        <Image
        htmlWidth="400"
        htmlHeight="450"
        borderRadius="full"
          alt={" Image"}
          objectFit={"cover"}
          src={mypic}
          className="home-img"
        />
      </Flex>
    </Stack>
  );
}
