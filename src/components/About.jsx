import {
    Box,
    Button,
    Center,
    Heading,
    Image,
    Stack,
    Text,
  } from "@chakra-ui/react";
 import profile from "./Pictures/proPic.jpeg"
  import * as Scroll from "react-scroll";
  
  const About = () => {
    return (
      <Box id="about" className="about section" py={{ base: "10vh", md: "20vh" }}>
        <Center mb={4}>
          <Heading fontSize={{ base: "2xl", md: "4xl" }}   color={'white'}>About Me</Heading>
        </Center>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 8, md: 16 }}
          justify="center"
          align="center"
          mb={{ base: 16, md: 32 }}
        >
          <Image
            src={profile}
            alt="profile"
            h={{ base: "200px", md: "350px" }}
            w={{ base: "200px", md: "350px" }}
            objectFit="cover"
            overflow={'hidden'}
            borderRadius="full"
            boxShadow="2xl"
            className="home-img"
          />
          <Box
            w={{ base: "80%", md: "50%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Heading fontSize={{ base: "xl", md: "2xl" }} mb={4}   color={'white'}>
              Hello, my name is M Noor Mohammed
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "lg" }}
              mb={8}
              color={'white'}
              id={"user-detail-intro"}
            >
              An enthusiastic Web Developer having experience of 1200+ hours of coding and building websites with variousweb technologies like HTML, React, Redux, CSS, Javascript and Node js. Problem- solving mindset and the ability to perform well in collaboration.Looking forward to utilizing current skillset and experience to build  world-class websites to achieve organizational goals.
            </Text>
            <Scroll.Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <Button
                w={{ base: "100%", md: "auto" }}
                size="lg"
                p="8"
                borderRadius="10px"
                fontSize={{ base: "sm", md: "lg" }}
                bgGradient={
                  "linear(to-l,#3CAED7 100%, #40BAB6 100%)"    
                }
                bgColor={"red"}
                _hover={{
                  color: 'white',
                  bgColor:'black',
                  cursor: "pointer",
                 
                }}
              >
                Contact Me
              </Button>
            </Scroll.Link>
          </Box>
        </Stack>
      </Box>
    );
  };
  
  export default About;