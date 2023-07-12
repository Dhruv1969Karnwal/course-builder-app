import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const submitHandler = e => {
      e.preventDefault();
    };

  return (
    <Container py={'16'} minH={'90vh'}>
        <form onSubmit={submitHandler}>
            <Heading textTransform={"uppercase"} children="Change Password" my={'16'} textAlign={['center','left']} />
            <VStack spacing={'8'}>
            <Input
              required
              type="password"
              focusBorderColor="yellow.500"
              value={oldPassword}
              onChange={e => setOldPassword(e.target.value)}
              placeholder=" Old Password"
            />
            <Input
              required
              type="password"
              focusBorderColor="yellow.500"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              placeholder=" New Password"
            />

            <Button w='full' colorScheme='yellow' type='submit'>Change</Button>
            </VStack>
        </form>
    </Container>
  )
}

export default ChangePassword