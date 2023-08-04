import { Box, Tag, Text, HStack ,IconButton,Icon, Image} from '@chakra-ui/react'
import React from 'react'
import Carousel from './Cursor'
import { AiOutlineLink,AiFillGithub} from "react-icons/ai";
import {MdSlowMotionVideo } from "react-icons/md";
export default function Carditem({name,html_url,homepage,topics,images,description,id}) {
    
  return (
    <div className="project-card" >
        <Box height={"460px"} bg='whiteAlpha.800' display={'flex'} alignItems='center' justifyContent={'space-evenly'} flexDirection={'column'} boxShadow='md' p='2px' pb='5px' rounded='md' borderColor='#C7AE92'_hover={{
                  bg: 'whiteAlpha.800',
                  boxShadow:'2xl',
                  p:'3px',
                  
                }}>
            
            <Carousel images={images}/>
            <Image w='5px' alt='image' src='https://png.pngtree.com/thumb_back/fh260/background/20200821/pngtree-pure-white-minimalist-background-wallpaper-image_396581.jpg' />
            <Text className='project-title' fontWeight={'bold'}>{name}</Text>
            <Text className='project-description' w='80%' m='auto' color={'gray.500'}>{description}</Text>
            
            <HStack justifyContent={'center'} alignItems={'center'} mt='10px' flexWrap={'wrap'}  w='80%' m='auto' >
            {  topics.map((el,i)=>(<Tag className='project-tech-stack' key={i} size='sm' 
                variant='outline'
                color='black' p='5px' >{el}</Tag>))

            }
            </HStack>
            <HStack justifyContent={'center'} columnGap='8px' mt='10px'>
            <IconButton className='project-github-link' onClick={()=>{window.open(html_url,"_blank")}} bg='#C7AE92' size={'sm'} icon={<Icon as={AiFillGithub}  />} />
            <IconButton className='project-deployed-link' onClick={()=>{window.open(homepage,"_blank")}}bg='#C7AE92' size={'sm'} icon={<Icon as={id===577832607?MdSlowMotionVideo:AiOutlineLink}  />} />
            </HStack>
        </Box>

    </div>
  )
}