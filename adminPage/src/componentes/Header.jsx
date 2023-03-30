import { ReactNode } from 'react';
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

export default function Header() {

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={10} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box> <Image src={Logo} w={"150px"} h={"auto"} /> </Box>

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
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}