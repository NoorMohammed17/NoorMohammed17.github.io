import { Box, Center, Heading, Show } from "@chakra-ui/react";
//import React from "react";
import { ProjectCards,MediumProjectCard } from "./ProjectCard";

//klooz images
import koolz1 from "./images/koolz1.png";
import koolz2 from "./images/koolz2.png";
import koolz3 from "./images/koolz3.png";

//himalaya images
import h1 from "./images/h1.png";
import h2 from "./images/h2.png";
import h3 from "./images/h3.png";
import h4 from "./images/h4.png";

//cart meals images
import cm1 from "./images/cm1.png";
import cm2 from "./images/cm2.png";

//react challenges images
import rc1 from "./images/rc1.png";
import rc2 from "./images/rc2.png";
import rc3 from "./images/rc3.png";


const Projects = () => {

  const koolz=[koolz1,koolz2,koolz3];
  const himalaya = [h1,h2,h3,h4];
  const cartMeals = [cm1,cm2];
  const reactChallenges = [rc1,rc2,rc3];

  // let img1="https://www.shutterstock.com/shutterstock/photos/1222098511/display_1500/stock-vector-infographic-dashboard-template-simple-green-blue-design-of-interface-admin-panel-with-graphs-1222098511.jpg";
  // let img2 = "https://img.freepik.com/free-vector/dashboard-interface-user-panel-template_52683-23323.jpg?w=2000"
 
  return (
    <Box
    mt={'40px'}
      pl={{
        base: "5",
        sm: "5",
        md: "5",
        lg: "10",
        xl: "10",
        "2xl": "10",
      }}
      pr={{
        base: "5",
        sm: "5",
        md: "5",
        lg: "10",
        xl: "10",
        "2xl": "10",
      }}
      id="projects"
    >
      <Center>
        <Heading mb={"40px"}>Projects</Heading>
      </Center>

      <ProjectCards
        direction={"row-reverse"}
        deployedLink={"https://koolz.vercel.app/"}
        image={koolz}
        title={"Koolz"}
        subTitle={"Group Project (e-commerce)"}
        GithubLink={"https://github.com/OnkarK0273/koovs-Website-Clone"}
        features={[
          "A home page with featured products and categories.",
          "Product detail pages with images, descriptions, and pricing information.",
          "A shopping cart to keep track of selected items. ",
          "A checkout process to complete purchases.",
          "User account creation and login functionality.",
         
        ]}
        description={
          " Koolz is a fully functional e-commerce website that allows users to browse and purchase a variety of products."
        }
        techStack={[
            "ReactJS", "Redux", "TypeScript","ChakraUI"
        ]}
      />
       <ProjectCards
        direction={"row-reverse"}
        deployedLink={"https://friendly-pudding-a5d011.netlify.app/"}
        image={himalaya}
        title={"Himalaya-Clone"}
        subTitle={"Group Project "}
        GithubLink={"https://github.com/btcpatil/handy-zipper-9467"}
        features={[
          "Functional navigation bar with user details.",
          "Login signup functionality for multiple users with the help of local storage.",
          "Product and Each product page. ",
        "Cart page and Payment page."
        ]}
        description={
          " Himalaya  website offers a full line of clinically-studied herbal formulations, certified USDA organic Single herbs, and a full line of body care products that allows users to browse and purchase a variety of products."
        }
        techStack={[
            "JavaScript","HTML","CSS"
        ]}
      />
      <ProjectCards
        direction={"row-reverse"}
        deployedLink={"https://foodordercartapp.netlify.app/"}
        image={cartMeals}
        title={"Cart Meals"}
        subTitle={"Individual Project"}
        GithubLink={"https://github.com/NoorMohammed17/FoodOrderApp"}
        features={[
          "We can add, remove the items in the cart.",
          "React.portals are used to create the modal dailog box.",
          "The modal will be closed on clicking the backdrop or the close button. ",
        "We can increase the quantity of items and responsive design."
        ]}
        description={
          "Cart Meals is a simple food order application using React.js features."
        }
        techStack={[
            "React js","react Portals", "react hooks"
        ]}
      />
       <ProjectCards
        direction={"row-reverse"}
        deployedLink={"https://animationframermotionproject.netlify.app/"}
        image={reactChallenges}
        title={"React Challenges"}
        subTitle={"Individual Project"}
        GithubLink={"https://github.com/NoorMohammed17/AnimationsProject"}
        features={[
          "We can add the challenges, toggle between active, completed and failed challenges.",
          "React.portals are used to create the modal dailog box.",
          "The modal will be closed on clicking the backdrop or the close button. ",
        "Used framer motion for animations."
        ]}
        description={
          "React challenges website built with react and framer-motion to apply animations."
        }
        techStack={[
            "React js","react Portals", "react hooks","framer motion"
        ]}
      />

    

     

     

      <Show breakpoint="(max-width: 993px)">
        <MediumProjectCard
           deployedLink={"https://koolz.vercel.app/"}
           image={koolz}
           title={"Koolz-Clone"}
           subTitle={"Group Project (e-commerce)"}
           GithubLink={"https://github.com/OnkarK0273/koovs-Website-Clone"}
          description={
            "Koolz is a fully functional e-commerce website that allows users to browse and purchase a variety of products. "
          }
          techStack={[
            "ReactJS", "Redux", "TypeScript","ChakraUI"
        ]}
        />
          <MediumProjectCard
           deployedLink={"https://friendly-pudding-a5d011.netlify.app/"}
           image={himalaya}
           title={"Himalaya-Clone"}
           subTitle={"Group Project "}
           GithubLink={"https://github.com/btcpatil/handy-zipper-9467"}
          description={
            "Himalaya  website offers a full line of clinically-studied herbal formulations, certified USDA organic Single herbs, and a full line of body care products that allows users to browse and purchase a variety of products"
          }
          techStack={[
            "JavaScript","HTML","CSS"
        ]}
        />
        <MediumProjectCard
    
        deployedLink={"https://foodordercartapp.netlify.app/"}
        image={cartMeals}
        title={"Cart Meals"}
        subTitle={"Individual Project"}
        GithubLink={"https://github.com/NoorMohammed17/FoodOrderApp"}
        description={
          "Cart Meals is a simple food order application using React.js features."
        }
        techStack={[
            "React js","react Portals", "react hooks"
        ]}
        />
        <MediumProjectCard
        deployedLink={"https://animationframermotionproject.netlify.app/"}
        image={reactChallenges}
        title={"React Challenges"}
        subTitle={"Individual Project"}
        GithubLink={"https://github.com/NoorMohammed17/AnimationsProject"}
        description={
          "React challenges website built with react and framer-motion to apply animations."
        }
        techStack={[
            "React js","react Portals", "react hooks","framer motion"
        ]}
        />

       
      </Show>
    </Box>
  );
};

export default Projects;