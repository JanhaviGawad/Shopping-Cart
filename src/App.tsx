import React from 'react';
import './App.css';
import { Badge, Box } from '@chakra-ui/react';
import Cards from './components/Card/Card';
import { Flex, Spacer } from '@chakra-ui/react';
import Navbar from './components/Card/Navbar';

const App: React.FC = () => {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  };
  return (
    <div className="App">
      <Navbar />
      <Box w="100%" p={4} color="white">
        <Flex>
          <Box p="4" >
            <Cards/>
          </Box>
          <Spacer />
          <Box p="4">
          <Cards/>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default App;
