import { Container, Heading, VStack, Input, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    
  return (
    <Container py={'19'} h={'90vh'}>
      <form>
        <Heading
          children="Forget Password"
          my="16"
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />

        <VStack spacing={'6'}>
        <Input
              required
              type="email"
              focusBorderColor="yellow.500"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
            />

            <Button type='submit' w={'full'} colorScheme='yellow'>Send Reset Link</Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgetPassword;
