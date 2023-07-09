
import { Box, Button, Container, Grid, Heading, Image, Input, Select, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
// import cursor from '../../../assets/images/cursor.png';
import SideBar from '../SideBar';
import { fileUploadCss } from '../../auth/Register';
const categories = [
    'Web Development',
    'Artificial Intellegence',
    'Data Structure & Algorithm',
    'App Development',
    'Data Science',
    'Game Development',
  ];

const CreateCourse = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [createdBy, setCreatedBy] = useState('');
    const [category, setCategory] = useState('');
    const [imagePrev, setImagePrev] = useState('');
    const [image, setImage] = useState('');

    const changeImageHandler = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.readAsDataURL(file);
    
        reader.onloadend = () => {
          setImagePrev(reader.result);
          setImage(file)
        };
      };
  return (
    <Grid
    // css={{
    //   cursor: `url(${cursor}), default`,
    // }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >

      <Container py={'16'}>
        
        <form>
        <Heading textTransform={'uppercase'} children="Create Course" my='16' textAlign={['center','left']} />
        <VStack m='auto' spacing={'8'}>
        <Input
              type="text"
              focusBorderColor="purple.500"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Title"
            />
        <Input
              type="text"
              focusBorderColor="purple.500"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Description"
            />
        <Input
              type="text"
              focusBorderColor="purple.500"
              value={createdBy}
              onChange={e => setCreatedBy(e.target.value)}
              placeholder="Creator Name"
            />

            <Select focusBorderColor={"purple.300"} value={category} onChange={e => setCategory(e.target.value)}>
                <option value=''>Category</option>
                {
                    categories.map(item => (
                        <option key={item} value={item}>{item}</option>
                    ))
                }
            </Select>
            <Input
              accept="image/"
              required
              type={'file'}
              focusBorderColor="yellow.500"
              css={{
                '&::file-selector-button': {
                    ...fileUploadCss,
                    color:"purple"
                }
              }}
              onChange={changeImageHandler}
            />
            {
                imagePrev && (
                    <Image src={imagePrev} boxSize={'64'} objectFit={'contain'} />
                )
            }
            <Button w='full' colorScheme='purple' type='submit'>Create</Button>
        </VStack>
        </form>

      </Container>
      <SideBar />
    </Grid>
  );
};

export default CreateCourse;
