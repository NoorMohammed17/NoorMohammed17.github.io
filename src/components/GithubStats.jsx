import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'

export default function GithubStats() {
  return (
    <Box p='20px' >
        <Heading></Heading>
        <Flex w={{base:'90%',sm:'90%',md:'80%'}} m='auto' columnGap={'5px'} flexDirection={{base:'column',sm:'column',md:'row'}}>
            <Box>
            <Image id="github-stats-card" src='https://github-readme-stats.vercel.app/api?username=NoorMohammed17&theme=swift&show_icons=true&hide_border=false&count_private=true'/>
            </Box>
            <Box>
            <Image  id="github-streak-stats"  src='https://github-readme-streak-stats.herokuapp.com/?user=NoorMohammed17&theme=swift&hide_border=false'/>
            </Box>
            <Box>
            <Image  id="github-top-langs" src='https://github-readme-stats.vercel.app/api/top-langs/?username=NoorMohammed17&theme=swift&show_icons=true&hide_border=false&layout=compact'/>
            </Box>
        </Flex>
    </Box>
  )
}