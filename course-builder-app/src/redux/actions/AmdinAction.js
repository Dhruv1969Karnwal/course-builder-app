import { server } from '../Store';
import axios from 'axios';

export const createCourse = formData => async dispatch => {
  try {
    dispatch({ type: 'createCourseRequest' });

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    };
    for (let entry of formData.entries()) {
      console.log(entry[0], entry[1]);
    }
    const { data } = await axios.post(
      `${server}/createcourse`,
      formData,
      config
    );

    dispatch({
      type: 'createCourseSuccess',
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: 'createCourseFail',
      payload: error.response.data.message,
    });
  }
};
export const deleteCourse = id => async dispatch => {
  try {
    dispatch({ type: 'deleteCourseRequest' });

    const config = {
      withCredentials: true,
    };
    const { data } = await axios.delete(`${server}/course/${id}`, config);

    dispatch({
      type: 'deleteCourseSuccess',
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: 'deleteCourseFail',
      payload: error.response.data.message,
    });
  }
};
