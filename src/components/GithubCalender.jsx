import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
const GithubCalender = () => {

  return (
    <Box w='80%'m='auto'>
      <Heading color='#C7AE92'pt='40px' pb='40px'>DAYS I CODE</Heading>
      <GitHubCalendar
        style={{ margin: "auto" }}
        username="NoorMohammed17"
        
        blockSize={12}
        fontSize={12}
        color='#C7AE92'
      >
         <ReactTooltip delayShow={20} html /> 
      </GitHubCalendar>
    </Box>
  );
};

export default GithubCalender;