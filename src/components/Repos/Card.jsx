import { Grid, Heading } from '@chakra-ui/react'
import React from 'react'
import Carditem from './Carditem'
import { repos } from '../../Data/repos'
export default function Card() {
  return (
    <div  id="projects">
        <Heading color={'#C7AE92'} pt='40px' pb='40px'>PROJECTS </Heading>
        { <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'}}w='80%' m='auto'  columnGap={'4%'} rowGap='20px' >
            {
                repos.map((el)=>(<Carditem key={el.id} {...el}/>))
            }
        </Grid> }

    </div>
  )
}