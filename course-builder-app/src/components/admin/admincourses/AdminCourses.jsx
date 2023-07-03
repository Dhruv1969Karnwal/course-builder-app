
import { Box, Grid, Text } from '@chakra-ui/react';
import React from 'react';
import cursor from '../../../assets/images/cursor.png';
import SideBar from '../SideBar';
const AdminCourses = () => {
  return (
    <Grid
    css={{
      cursor: `url(${cursor}), default`,
    }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >

      
      <SideBar />
    </Grid>
  );
};

export default AdminCourses;
