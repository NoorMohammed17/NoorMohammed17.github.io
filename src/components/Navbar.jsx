import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Menu,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import * as Scroll from "react-scroll";

const Links = [
  { name: "Home", id: "home", class: "nav-link home" },
  { name: "About", id: "about", class: "nav-link about" },
  { name: "Skills", id: "skills", class: "nav-link skills" },
  { name: "Statistics", id: "statistics", class: "nav-link statistics" },

  { name: "Projects", id: "projects", class: "nav-link projects" },
  { name: "Contact", id: "contact", class: "nav-link contact" },
];

const NavLink = ({ link }) => (
  <Scroll.Link
    activeClass="active"
    to={link.id}
    spy={true}
    smooth={true}
    offset={-100}
    duration={500}
  >
    <Link
      px={5}
      py={1}
      color="white"
      fontWeight="semibold"
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        color: "black",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      className={link.class}
      href={`${link.id}`}
    >
      {link.name}
    </Link>
  </Scroll.Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const color = "blue.400";
  //const color1="#C7AE92"

  return (
    <div id="nav-menu" style={{ position: "sticky", top: 0, zIndex: 2 }}>
      <Box bg={color} px={4} py={1}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Flex alignItems={"center"}>
            <Menu>
              {/* <Image w="25%" src='/images/signature.png'></Image> */}
              <Text as="i" fontSize="3xl" color="white">
                {" "}
                M Noor Mohammed
              </Text>
            </Menu>
          </Flex>

          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link.id} link={link} />
              ))}
              <Button
                w={{ base: "150px", md: "100px", lg: "100px" }}
                m="auto"
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1jRySSU_Uuv_yTrvth5NLmz1ujZBK8owx/view?usp=share_link",
                    "_blank"
                  );
                }}
                borderColor="white"
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
            </HStack>
          </HStack>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.id} link={link} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
  );
}
