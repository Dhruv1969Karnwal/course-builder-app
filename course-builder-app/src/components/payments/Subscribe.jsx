import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Subscribe = () => {
  return (
    <Container h='90vh' p={'16'}>
      <Heading children="Welcome" my={'8'} textAlign={'center'} />
      <VStack boxShadow={'lg'} alignItems={'stretch'} borderRadius={'lg'} spacing={'0'}>
      <Box bg='yellow.400' p="4" css={{borderRadius: "8px 8px 0 0"}}>
        <Text color={'black'} children={`Dark Knight   -    ₹499.00`} />
      </Box>
      <Box p='4'>
        <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
        <Text  children={`Join Dark Knight and Get Access to all premium courses.`} />
        <Heading size={'md'} children="₹499.00 Only" />
        </VStack>
        <Button my={'8'} w='full' colorScheme='yellow'>Buy Now</Button>
      </Box>
      <Box bg={'blackAlpha.600'} p='4' css={{borderRadius: "0 0 8px 8px"}}>
      <Heading children="100% refund at cancellation" color={'white'} textTransform={'uppercase'} size={'sm'} />
      <Text color={'white'} children={`*Terms and Conditions applied`} fontSize={'sm'} />
      </Box>
      </VStack>
    </Container>
  )
}

export default Subscribe