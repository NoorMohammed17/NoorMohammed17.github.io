import React from "react";
import licious from "./Pictures/licious.PNG";
import himalaya from "./Pictures/himalaya.PNG";
import { Image, Link, Flex, Button,Heading } from "@chakra-ui/react";

const Projects = () => {
  const licious_Url = "https://guileless-kleicha-1e91f4.netlify.app/";
  // const nordstrom_Url = "";
  const himalaya_Url = "https://friendly-pudding-a5d011.netlify.app/homepage/";
  // const github_himalaya_Url="https://github.com/btcpatil/handy-zipper-9467";

  return (
    <div id="projects">
      <Heading color="#0ac09d" p="30px" mb="20px" textAlign="center">
        MY PROJECTS
      </Heading>

      <div style={{ display: "flex", marginBottom: "30px", margin:'auto' }}>
        <div style={{ width: "65%", marginRight: "10px" }}>
          <img src={licious} alt="licious"  width="100%" />
        </div>
        <div>
          <h1>Licious Clone</h1>
          <Flex id="tech">
            <Image
              w={"50px"}
              src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg"
            />
            <Image
              w={"50px"}
              src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg"
            />
            <Image
              w={"50px"}
              src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg"
            />
          </Flex>
          <Flex>
            <Link
              href="https://github.com/PratyayChakraborty/obscene-pest-6443"
              isExternal
            >
              <Image
                w={"50px"}
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              ></Image>
            </Link>
            <Link href={licious_Url} isExternal>
              <Button colorScheme="purple">Visit Site</Button>
            </Link>
          </Flex>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "65%", marginRight: "10px" }}>
          <img src={himalaya} alt="himalaya"  width="100%"/>
        </div>
        <div>
          <h1>Himalaya Clone</h1>
          <Flex>
            <Image
              w={"50px"}
              src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg"
            />
            <Image
              w={"50px"}
              src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg"
            />
            <Image
              w={"50px"}
              src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg"
            />
          </Flex>
          <Flex>
            <Link
              href="https://github.com/btcpatil/handy-zipper-9467"
              isExternal
            >
              <Image
                w={"50px"}
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              ></Image>
            </Link>
            <Link href={himalaya_Url} isExternal>
              <Button colorScheme="purple">Visit Site</Button>
            </Link>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default Projects;
