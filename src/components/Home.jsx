import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as Scroll from "react-scroll";
import mypic from "./Pictures/proPic.jpeg";

export default function Home() {
  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      className="about section"
      margin='auto'
      mr='5%'
      mt='20px'
      mb={'40px'}
      id={'about'}
    >
      
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              color='white'
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
          {/* <Text color={"black.400"}  fontSize={{ base: "2xl", lg: "3xl" }}>
              Full Stack Web Developer
            </Text> */}
            <Text color={"white"}  fontSize={{ base: "2xl", lg: "3xl" }}>
              Front-End Developer
            </Text>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"gray.500"}
            id="user-detail-intro"
          >
            Passionate about building web applications using front-end technologies . I believe in continuous learning and growth.
            Looking forward to work in a challenging work environment.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
          <Scroll.Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
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
            </Scroll.Link>
            <Button
                // w={{ base: "150px", md: "100px", lg: "100px" }}
                m="auto"
                rounded={"full"}
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1jRySSU_Uuv_yTrvth5NLmz1ujZBK8owx/view?usp=share_link",
                    "_blank"
                  );
                }}
                bgColor="blue.400"
                color='white'
                variant="outline"
                id="resume-button-1"
              >
                <a
                  id="resume-link-1"
                  className="nav-link resume"
                  href="/Noor_Mohammed_Resume.pdf"
                  download
                >
                  Resume {""}
                </a>
              </Button>
          </Stack>
        </Stack>
      </Flex>

      <Flex flex={1}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'1xl'}
        borderRadius={'20%'}
      
       > 
        <Image
        htmlWidth="400"
        htmlHeight="450"
        borderRadius="full"
        m='auto'
          alt={" Image"}
          objectFit={"cover"}
          src={mypic}
          className="home-img"
        />
      </Flex>
    </Stack>
  );
}
