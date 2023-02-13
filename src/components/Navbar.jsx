import React from "react";
//import mypic from "./Pictures/proPic.jpeg";
// import {AboutMe} from "./AboutMe";
// import GithubCalender from './GithubCalender'
import {
  Flex,
  Text,
  Heading,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div id="nav-menu">
      <Flex
        border={"1px solid red"}
        justifyContent={"space-between"}
        px={5}
        position="sticky"
        top="0"
        left="0"
      >
        <Heading>M Noor Mohammed</Heading>
        <HStack display={{ base: "none", md: "flex" }}>
          <Text className="nav-link home">Home</Text>
          <Text className="nav-link about">About</Text>
          <Text className="nav-link skills">Skills</Text>
          <Text className="nav-link projects">Projects</Text>
          <Text className="nav-link contact">Contact</Text>
          <Button className="nav-link resume">Resume</Button>
        </HStack>
        <Button display={{ base: "block", md: "none" }}>
          <Menu>
            <MenuButton as={Button} onClick={onOpen}>
              <HamburgerIcon />
            </MenuButton>
            <MenuList>
              <MenuItem>Home</MenuItem>
              <MenuItem>About</MenuItem>
              <MenuItem>Skills</MenuItem>
              <MenuItem>Projects</MenuItem>
              <MenuItem>Contact</MenuItem>
              <MenuItem>Resume</MenuItem>
            </MenuList>
          </Menu>
        </Button>
      </Flex>
    </div>
  );
}
