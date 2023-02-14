import React, { ReactNode } from 'react'
import {Link} from  'react-router-dom'
import {
  Box,
  Flex,
  Avatar,
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
  HStack,
  Icon ,
} from '@chakra-ui/react';
import { FiSun ,FiMoon} from 'react-icons/fi'
import {FaShoppingBag} from 'react-icons/fa'


type Props = {}

const Navbar = (props: Props) => {

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('blue.700', 'red.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Link to='/'><Icon as={FaShoppingBag}   w={8} h={8} color='black.500'/></Link>


          <HStack spacing='24px'>
            <Link to='/place'>
              <Button>Placed Orders</Button></Link>
            <Link to='/myorder'> <Button>My Orders</Button></Link>
            </HStack>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <FiMoon /> : <FiSun />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/female/janhavi.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/female/janhavi.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>JanhaviGawad</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
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

export default Navbar