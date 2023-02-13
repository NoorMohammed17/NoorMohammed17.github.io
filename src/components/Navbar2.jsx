import React, { useState } from 'react';
import { useColorMode, Box, Button, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [show, setShow] = useState(false);
  const {  onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg={colorMode === "light" ? "white" : "gray.700"}
      color={colorMode === "light" ? "gray.700" : "white"}
      boxShadow="md"
    >
      <Flex align="center" mr={5}>
        <Button as="a" href="#" fontWeight="medium">
          Your Logo
        </Button>
      </Flex>

      <Box display={{ sm: "block", md: "none" }} onClick={onOpen}>
        <IconButton
          aria-label="Toggle menu"
          icon={FiMenu}
          color="white"
        />
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <Button as="a" href="#" fontWeight="medium" mr={5}>
          Home
        </Button>
        <Button as="a" href="#" fontWeight="medium" mr={5}>
          About
        </Button>
        <Button as="a" href="#" fontWeight="medium" mr={5} onClick={()=> setShow(false)}>
          Portfolio
        </Button>
        <Button as="a" href="#" fontWeight="medium">
          Contact
        </Button>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          bg={colorMode === "light" ? "gray.300" : "white"}
          onClick={toggleColorMode}
        >
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
        onClick={onClose}
      >
        <IconButton
          aria-label="Close menu"
          icon={FiMenu}
          color="white"
        />
      </Box>
    </Flex>
  );
};

export default Navbar;
