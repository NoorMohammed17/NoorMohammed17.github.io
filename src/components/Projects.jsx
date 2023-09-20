import React from "react";
//import licious from "./Pictures/licious.PNG";
//import himalaya from "./Pictures/himalaya.PNG";
import { Box, Center, Heading, Show } from "@chakra-ui/react";
//import React from "react";
import { ProjectCards,MediumProjectCard } from "./ProjectCard";

const Projects = () => {
 
  return (
    <Box
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
        image={["https://www.shutterstock.com/shutterstock/photos/1222098511/display_1500/stock-vector-infographic-dashboard-template-simple-green-blue-design-of-interface-admin-panel-with-graphs-1222098511.jpg","https://img.freepik.com/free-vector/dashboard-interface-user-panel-template_52683-23323.jpg?w=2000"]}
        title={"Koolz-Clone"}
        subTitle={"e-commerce"}
        GithubLink={"https://github.com/OnkarK0273/koovs-Website-Clone"}
        features={[
          "jsonweb tokens authentication",
          "Sign up or log in to watch  your volunteer opportunities",
          "Each Volunteer opportunity has a dedicated page with a detailed information ",
          "View Volunteer oppurtinites related to their location work mode type and by key words",
          "Sort, search, and filter to easily find the opportunities you're looking for",
          "Admin side with complete information of volunteer opportunities",
        ]}
        description={
          " The Koolz.com Clone is a fully functional e-commerce website that allows users to browse and purchase a variety of products."
        }
        techStack={[
            "ReactJS", "Redux", "TypeScript","ChakraUI"
        ]}
      />
       <ProjectCards
        direction={"row-reverse"}
        deployedLink={"https://koolz.vercel.app/"}
        image={["https://www.shutterstock.com/shutterstock/photos/1222098511/display_1500/stock-vector-infographic-dashboard-template-simple-green-blue-design-of-interface-admin-panel-with-graphs-1222098511.jpg","https://img.freepik.com/free-vector/dashboard-interface-user-panel-template_52683-23323.jpg?w=2000"]}
        title={"Koolz-Clone"}
        subTitle={"e-commerce"}
        GithubLink={"https://github.com/OnkarK0273/koovs-Website-Clone"}
        features={[
          "jsonweb tokens authentication",
          "Sign up or log in to watch  your volunteer opportunities",
          "Each Volunteer opportunity has a dedicated page with a detailed information ",
          "View Volunteer oppurtinites related to their location work mode type and by key words",
          "Sort, search, and filter to easily find the opportunities you're looking for",
          "Admin side with complete information of volunteer opportunities",
        ]}
        description={
          " The Koolz.com Clone is a fully functional e-commerce website that allows users to browse and purchase a variety of products."
        }
        techStack={[
            "ReactJS", "Redux", "TypeScript","ChakraUI"
        ]}
      />

    

     

     

      <Show breakpoint="(max-width: 993px)">
        <MediumProjectCard
           deployedLink={"https://koolz.vercel.app/"}
           image={["https://www.shutterstock.com/shutterstock/photos/1222098511/display_1500/stock-vector-infographic-dashboard-template-simple-green-blue-design-of-interface-admin-panel-with-graphs-1222098511.jpg","https://img.freepik.com/free-vector/dashboard-interface-user-panel-template_52683-23323.jpg?w=2000"]}
           title={"Koolz-Clone"}
           subTitle={"e-commerce"}
           GithubLink={"https://github.com/OnkarK0273/koovs-Website-Clone"}
          description={
            "Health Prime is an online platform that offers a wide range of healthcare products and medicines to users. With its user-friendly interface and competitive pricing, Health Prime makes it easy for users to find and purchase the products they need. "
          }
          techStack={[
            "ReactJS", "Redux", "TypeScript","ChakraUI"
        ]}
        />
          <MediumProjectCard
           deployedLink={"https://koolz.vercel.app/"}
           image={["https://www.shutterstock.com/shutterstock/photos/1222098511/display_1500/stock-vector-infographic-dashboard-template-simple-green-blue-design-of-interface-admin-panel-with-graphs-1222098511.jpg","https://img.freepik.com/free-vector/dashboard-interface-user-panel-template_52683-23323.jpg?w=2000"]}
           title={"Koolz-Clone"}
           subTitle={"e-commerce"}
           GithubLink={"https://github.com/OnkarK0273/koovs-Website-Clone"}
          description={
            "Health Prime is an online platform that offers a wide range of healthcare products and medicines to users. With its user-friendly interface and competitive pricing, Health Prime makes it easy for users to find and purchase the products they need. "
          }
          techStack={[
            "ReactJS", "Redux", "TypeScript","ChakraUI"
        ]}
        />
       
      </Show>
    </Box>
  );
};

export default Projects;