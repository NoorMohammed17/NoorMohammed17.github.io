
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
 
  Image,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';


const Links =[{name:'Home',id:'home',class:'nav-link home'},{name:'About',id:'about',class:'nav-link about'},{name:'Skills',id:'skills',class:'nav-link skills'},{name:'Projects',id:'projects',class:'nav-link projects'},{name:'Contact',id:'contact',class:'nav-link contact'}]
const NavLink = ({link}) => (
  <Link
    px={5}
    py={1}
    fontWeight="semibold"
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    className={link.class}
    href={`#${link.id}`}>
    {link.name}
  </Link>
);

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div  id="nav-menu" style={{position:'sticky',top:0,zIndex:2}}>
      <Box bg="#C7AE92" px={4} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
         
          <Flex alignItems={'center'}>
            <Menu>
                <Image w="25%" src='/images/signature.png'></Image>
            </Menu>
          </Flex>
        
          <HStack spacing={8} alignItems={'center'}>
            
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.id} link={link}/>
              ))}
              <Button
                w={{ base: '150px', md: '100px', lg: '100px' }}
                m="auto"
                onClick={()=>{window.open('https://drive.google.com/file/d/10caKf20AnU9VYco2-Nj4q6VsuQqDUbjc/view?usp=share_link',"_blank")}}
                borderColor="white"
                variant='outline'
                
                id="resume-button-1"
                >
                  <a  id="resume-link-1" href='/Onkar_Kalsannawar_Resume.pdf' className="nav-link resume" download    >Resume {''}</a>
              </Button>
            </HStack>
          </HStack>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.id} link={link}/>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      
    </div>
  );
}