import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
// import cursor from '../../../assets/images/cursor.png';
import SideBar from '../SideBar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import my_profile from '../../../assets/images/my_profile.jpeg';
import CourseModal from '../CourseModal';
const AdminCourses = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const courses = [
    {
      _id: 'jfnsfhishfoi',
      title: 'react course',
      category: 'Web Development',
      poster: {
        url: my_profile,
      },
      createdBy: 'DarkNight',
      views: 123,
      numOfVideos: 12,
    },
  ];

  const courseDetailsHandler = userId => {
    onOpen();
  };
  const deleteButtonHandler = userId => {};
  const deleteLectureButtonHandler = ({ courseId, lectureId }) => {};
  const addLectureButtonHandler = (e,courseId,title,description,videos) => {
    e.preventDefault()
  };
  return (
    <Grid
      // css={{
      //   cursor: `url(${cursor}), default`,
      // }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['0', '8']} overflowX={'auto'}>
        <Heading
          textTransform={'uppercase'}
          children="All Users"
          my="16"
          textAlign={['center', 'left']}
        />

        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All available courses in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
              {courses.map(item => (
                <Row
                  item={item}
                  key={item._id}
                  courseDetailsHandler={courseDetailsHandler}
                  deleteButtonHandler={deleteButtonHandler}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <CourseModal
          isOpen={isOpen}
          onClose={onClose}
          id={'dnajifbyus'}
          courseTitle="recat course"
          deleteLectureButtonHandler={deleteLectureButtonHandler}
          addLectureButtonHandler={addLectureButtonHandler}
        />
      </Box>
      <SideBar />
    </Grid>
  );
};

export default AdminCourses;

function Row({ item, courseDetailsHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => courseDetailsHandler(item._id)}
            variant={'outline'}
            color={'purple.500'}
          >
            View Lecture
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
