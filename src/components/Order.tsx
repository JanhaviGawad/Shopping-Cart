import {
  Box,
  HStack,
  Image,
  VStack,
  Text,
  StackDivider,
  Heading,
  Flex,
  Spacer,
  Progress,
  Center,
} from '@chakra-ui/react';
import React from 'react';

type Props = {};

const Order = (props: Props) => {
  return (
    <Flex  m="10"  bgColor={'gray.300'} borderRadius={10} dropShadow={'lg'}>
      <Box boxSize="sm" p="5">
        <Image
          height={'100%'}
          src="https://bit.ly/dan-abramov"
          borderRadius={10}
          alt="Dan Abramov"
        />
      </Box>
      <Box p="20" h={'40px'} w={'350px'}>
        <VStack spacing={4} align="stretch">
          <Heading as="h5" size={'md'}>
            Hello Everyone
          </Heading>
          <Text>By Janhavi Gawad</Text>
          <HStack>
            <Text>Size : S Qty : 1</Text>
            <Text>Rs : 10000</Text>
          </HStack>
        </VStack>
      </Box>
      {/* <Spacer flexGrow={1} /> */}
      <Box  flexGrow={1} m={2} alignItems={'center'} p='20'>
        <Heading>   Order Status</Heading> 
        <Text textColor={'black'} >Dispatching</Text>

        <Progress value={30} size='lg' colorScheme='pink'  borderRadius={10} />

      </Box>
    </Flex>
  );
};

export default Order;
