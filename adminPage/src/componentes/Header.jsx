import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
} from '@chakra-ui/react';
import Logo from "../assets/logo.png"
import { Navigate, NavLink } from 'react-router-dom';
import { Context } from '../main';
import { useContext } from 'react';

export default function Header() {

  const {  setIsAuthenticated } = useContext(Context);


  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={10} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box><NavLink to={`/`}> <Image src={Logo} w={"150px"} h={"auto"} /> </NavLink></Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src='https://bit.ly/broken-link'
                    bg='teal.500'
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src='https://bit.ly/broken-link'
                      bg='teal.500'
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem onClick={() => {setIsAuthenticated(false)}}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}