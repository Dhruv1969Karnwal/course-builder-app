import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
// import cursor from '../../../assets/images/cursor.png';
import SideBar from '../SideBar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../redux/actions/AmdinAction';
import Loader from '../../Layout/loader/Loader';
const Users = () => {
  // const users = [{
  //   _id:"jfnsfhishfoi",
  //   name:"dhruv",
  //   email:"asv@gmail.com",
  //   role:"admin",
  //   subscription:{
  //     status:"active"
  //   },
  // }]
  const dispatch = useDispatch();
  const { users, loading} = useSelector(state => state.admin);

  const updateHandler = userId => {};
  const deleteButtonHandler = userId => {};
  useEffect(() => {
    dispatch(getAllUsers());
  },[dispatch]);
  return (
    <Grid
      // css={{
      //   cursor: `url(${cursor}), default`,
      // }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      {loading ? (
        <Loader color='purple.500'/>
      ) : (
        <>
          <Box p={['0', '16']} overflowX={'auto'}>
            <Heading
              textTransform={'uppercase'}
              children="All Users"
              my="16"
              textAlign={['center', 'left']}
            />

            <TableContainer w={['100vw', 'full']}>
              <Table variant={'simple'} size={'lg'}>
                <TableCaption>All available users in the database</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Id</Th>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Role</Th>
                    <Th>Subscription</Th>
                    <Th isNumeric>Action</Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {users?.map(item => (
                    <Row
                      item={item}
                      key={item._id}
                      updateHandler={updateHandler}
                      deleteButtonHandler={deleteButtonHandler}
                    />
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </>
      )}

      <SideBar />
    </Grid>
  );
};

export default Users;

function Row({ item, updateHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>{item.subscription &&  item.subscription.status === 'active' ? 'Active' : 'Not Active'}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => updateHandler(item._id)}
            variant={'outline'}
            color={'purple.500'}
          >
            Change Role
          </Button>
          <Button
            color={'purple.600'}
            onClick={() => deleteButtonHandler(item._id)}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
