import {  Center, Heading, Text, Image,Box } from "@chakra-ui/react";
import React from "react";
import mypic from "./Pictures/proPic.jpeg"


export function AboutMe() {
 
  return (
    <Center textColor={"green"} mt={['5%']} borderColor={"1px solid teal"} padding={"3%"}>
        <Image  htmlWidth="300"
        hmlHeight="450"
        borderRadius='full'
      
          id="pic"
          // src="https://i.pinimg.com/originals/81/17/8b/81178b47a8598f0c81c4799f2cdd4057.gif"
          src={mypic}
          alt="myPhoto"
        />
      
        <Heading >
          <Text w={"100%"} >Hello,</Text>
          <Text w={"100%"}>I am, M Noor Mohammed </Text>
          <Box w={"100%"}>Full Stack Web Developer</Box>
          <Text w={"100%"} fontSize="20px">
            Passionate about building web applications using front-end and backend technologies . I believe in
            continuous learning and growth. Looking forward to work in a challenging work environment.
          </Text>
        </Heading>
         {/* <Image 
          id="pic"
          src="https://i.pinimg.com/originals/81/17/8b/81178b47a8598f0c81c4799f2cdd4057.gif"
          alt="myPhoto"
        /> */}
        
      
    </Center>
  );
}