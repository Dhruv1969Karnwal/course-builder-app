import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const RequestCourse = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');

  return (
    <Container h={'92vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children="Request New Course" />
        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              type="text"
              focusBorderColor="yellow.500"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="abc"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              type="email"
              focusBorderColor="yellow.500"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="course" children="Course" />
            <Textarea
              required
              id="course"
              focusBorderColor="yellow.500"
              value={course}
              onChange={e => setCourse(e.target.value)}
              placeholder="Explain the course ..."
            />
          </Box>
          <Button my="4" colorScheme="yellow" type="submit">
            Send Mail
          </Button>

          <Box my="4">
            See available Courses!{' '}
            <Link to="/courses">
              <Button colorScheme="yellow" variant={'link'}>
                Click
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default RequestCourse;
