import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import Order from '../components/Order'

type Props = {}

const MyOrder = (props: Props) => {
  return (
    <Box>
      <Order />
      <Order/>
      <Order/>

    </Box>
  )
}

export default MyOrder