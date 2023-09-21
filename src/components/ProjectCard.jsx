import {
    Badge,
    Box,
    Button,
    Flex,
    Grid,
    Heading,
    Hide,
    Image,
    Stack,
    Text,   
    Center,
} from "@chakra-ui/react";
import { RxGithubLogo } from "react-icons/rx";
import { HiExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import Carousel from "./CArousal";
import { motion } from "framer-motion";
import { VscDebugBreakpointLog } from "react-icons/vsc";

//   const repos = [

//     {
//       id: 52801449888,
//       name: "Koolz-Clone",
//       html_url: "https://github.com/OnkarK0273/koovs-Website-Clone",
//       description: " The Koolz.com Clone is a fully functional e-commerce website that allows users to browse and purchase a variety of products.",
//       homepage: "https://koolz.vercel.app/",
//       topics: ["ReactJS", "Redux", "TypeScript","ChakraUI"],
//       images:[ '/images/botlife-1.png',
//       '/images/botlife-2.png',
//       '/images/botlife-3.png',]
//     },
//     {
//       id: 586433289,
//       name: "Himalaya-clone",
//       html_url: "https://github.com/btcpatil/handy-zipper-9467",
//       homepage: "https://friendly-pudding-a5d011.netlify.app/homepage/",
//       topics: ["css3", "html5", "javascript"],
//       images:[ '/images/prime-1.png',
//       '/images/prime-2.png',
//       ],
//       description:"Himalaya offers a full line of clinically-studied herbal formulations, certified USDA organic Single herbs, and a full line of body care products. This is collaborative project."
//     },
//     {
//       id: 542080132,
//       name: "Calculator",
//       html_url: "https://github.com/NoorMohammed17/Calculator",
//       description:"This is a simple calculator using HTML, CSS & JavaScript",
//       homepage: "https://thriving-pika-1a1887.netlify.app/",
//       topics: ["css", "html", "javascript"],
//       images:[ '/images/dor&key-1.png',
//       '/images/dor&key-2.png',
//       '/images/dor&key-3.png',]
//     },
//     {
//       id: 54208013255,
//       name: "HealthKart-Website-Clone",
//       html_url: "https://github.com/NoorMohammed17/StarWars",
//       description:"A simple Star-Wars characters search website, where you can search for the character by entering their name and onclick of the particular name you can check their personal info and the antamoy.",
//       homepage: "https://cool-tiramisu-12102a.netlify.app/index.html/",
//       topics: ["css", "html", "javascript"],
//       images:[ '/images/helth-1.png',
//       '/images/helth-2.png',
//       '/images/helth-3.png',
//       '/images/helth-4.png',
//       '/images/helth-5.png',
//       '/images/helth-6.png']
//     },


//   ];

const ProjectCards = ({
    direction,
    deployedLink,
    image,
    title,
    subTitle,
    GithubLink,
    features,
    techStack,
    description,
}) => {
   
    // eslint-disable-next-line no-unused-vars
    const [showFeatures, setShowFeatures] = useState(true);
    return (
        <Hide below="lg">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
            >
                <Flex
                    borderRadius={"10px"}
                    background={ "white" }
                    boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
                    direction={direction}
                    w={"100%"}
                    m={"auto"}
                    justifyContent={"space-evenly"}
                    h={"auto"}
                    mb={"30px"}
                    pl={{
                        base: "0",
                        sm: "0",
                        md: "0",
                        lg: "5",
                        xl: "5",
                        "2xl": "5",
                    }}
                    pr={{
                        base: "0",
                        sm: "0",
                        md: "0",
                        lg: "5",
                        xl: "5",
                        "2xl": "5",
                    }}
                    pb={{
                        base: "0",
                        sm: "0",
                        md: "0",
                        lg: "5",
                        xl: "5",
                        "2xl": "5",
                    }}
                    pt={{
                        base: "0",
                        sm: "0",
                        md: "0",
                        lg: "5",
                        xl: "5",
                        "2xl": "5",
                    }}
                >
                    <Box w={"40%"} className="project-card">
                        <Heading
                            fontSize={{
                                sm: "20px",
                                md: "30px",
                                lg: "40px",
                                xl: "42px",
                                "2xl": "42px",
                            }}
                            className="project-title"
                        >
                            {title}
                        </Heading>
                        <Heading
                            fontSize={{
                                sm: "20px",
                                md: "25px",
                                lg: "30px",
                                xl: "30px",
                                "2xl": "30x",
                            }}
                            mb={"20px"}
                        >
                            <Badge ml='1' fontSize='0.8em' colorScheme='green'>
                                {subTitle}
                            </Badge>

                        </Heading>
                        <Image w={"10px"} src="" />
                        <Text mb={"30px"} className="project-description">
                            {description}
                        </Text>
                        <Text as="b" fontSize={{
                            sm: "20px",
                            md: "25px",
                            lg: "30px",
                            xl: "30px",
                            "2xl": "30x",
                        }}>Features in this project</Text>
                        {showFeatures && (
                            <Box>
                                {features.map((feature, index) => (
                                    <Flex key={index}><Center><VscDebugBreakpointLog /><Text ><span> {feature}</span></Text></Center></Flex>
                                ))}
                            </Box>
                        )}
                        <Flex
                            alignItems={'center'}
                            mt={"20px"}
                            mb={"20px"}
                        >
                            <Text fontWeight="bold"
                                fontSize={{
                                    sm: "20px",
                                    md: "25px",

                                }}>Tech Stack:</Text>
                            <Flex
                                maxW={"100%"}
                                justifyContent={"space-around"}

                                flexWrap={"wrap"}
                                align={"center"}
                            >
                                {techStack.map((item) => {
                                    return (
                                        <Box className="project-tech-stack" ml={"5px"} key={item}>
                                            <Badge
                                                fontSize={{
                                                    sm: "15px",


                                                }}
                                                colorScheme={ "blue" }
                                            >
                                                #{item}
                                            </Badge>
                                        </Box>
                                    );
                                })}
                            </Flex>
                        </Flex>
                        <Link
                            to={deployedLink}
                            className="project-deployed-link"
                            target="_blank"
                        >
                            <Text as="b" textDecorationLine={"underline"}
                                _hover={{
                                    textDecorationLine: "none",
                                    color: 'blue.300'
                                }}>
                                Deployed Link
                            </Text>
                        </Link>
                        <Link
                            to={GithubLink}
                            className="project-github-link"
                            target="_blank"
                        >
                            <Button
                                ml={"20px"}
                                bgColor={ "black"}
                                color={ "white"}
                                _hover={{
                                    bg: 'blue.300',
                                }}
                            >
                                <RxGithubLogo />
                                <Box as="span" ml={"10px"}>
                                    Github
                                </Box>
                                <HiExternalLink />
                            </Button>
                        </Link>
                    </Box>
                    <Box w={"45%"}>
                        <Carousel image={image} />
                    </Box>
                </Flex>
            </motion.div>
        </Hide>
    );
};

function MediumProjectCard({
    image,
    deployedLink,
    GithubLink,
    subTitle,
    title,
    description,
    techStack,
}) {
   

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
        >
            <Stack
                borderRadius={"10px"}
                background={ "white" }
                boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
                w={"100%"}
                mb={"30px"}
                p={"5"}
            >
                <Box w={"100%"} className="project-card">
                    <Heading
                        fontSize={{
                            sm: "20px",
                            md: "30px",
                            lg: "40px",
                            xl: "54px",
                            "2xl": "64px",
                        }}
                        mb={"20px"}
                        className="project-title"
                    >
                        {title}  <Badge ml='1' fontSize='0.8em' colorScheme='green'>
                                {subTitle}
                            </Badge>
                    </Heading>
                    <Box w={"100%"} mb={"10px"}>
                        <Carousel image={image} />
                    </Box>
                    <Grid
                        templateColumns={{
                            sm: "repeat(1,1fr)",
                            md: "repeat(1,1fr)",
                        }}
                    >
                        <Box
                            pr={{
                                base: "0",
                                sm: "0",
                                md: "9",
                                lg: "9",
                            }}
                        >
                            <Text as="b">Description</Text>
                            <Text mb={"20px"} className="project-description">
                                {description}
                            </Text>
                        </Box>
                    </Grid>
                    <Grid
                        templateColumns={{
                            sm: "repeat(1,1fr)",
                            md: "70% 30%",
                        }}
                        alignItems={"baseline"}
                    >
                        <Flex flexDir={{ base: "column", sm: "row" }}>
                            <Text fontWeight="bold">Tech Stack:</Text>
                            <Flex
                                maxW={{ base: "100%", sm: "80%" }}
                                justifyContent={"space-around"}

                                flexWrap={"wrap"}
                                align={"center"}
                            >
                                {techStack.map((item) => {
                                    return (
                                        <Box className="project-tech-stack" ml={"5px"} key={item}>
                                            <Badge
                                                colorScheme={ "blue"}
                                            >
                                                #{item}
                                            </Badge>
                                        </Box>
                                    );
                                })}
                            </Flex>
                        </Flex>
                        <Flex w={"100%"} mt={'20px'}>
                            <Link
                                to={deployedLink}
                                className="project-deployed-link"
                                target="_blank"
                            >
                                <Text as="b" textDecorationLine={"underline"} _hover={{
                                    textDecorationLine: "none",
                                    color: 'blue.300'
                                }}>
                                    Deployed Link
                                </Text>
                            </Link>
                            <Link
                                to={GithubLink}
                                className="project-github-link"
                                target="_blank"
                            >
                                <Button
                                    ml={"20px"}
                                    bgColor={ "black" }
                                    color={ "white" }
                                    _hover={{
                                        bg: 'blue.300',
                                    }}
                                >
                                    <RxGithubLogo />
                                    <Box as="span" ml={"10px"}>
                                        Github
                                    </Box>
                                    <HiExternalLink />
                                </Button>
                            </Link>
                        </Flex>
                    </Grid>
                </Box>
            </Stack>
        </motion.div>
    );
}
export { ProjectCards, MediumProjectCard };