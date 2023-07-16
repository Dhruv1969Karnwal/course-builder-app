import { server } from '../Store';
import axios from 'axios';

export const contactUs = (name, email, message ) =>
  async dispatch => {
    try {
      dispatch({ type: 'contactUsRequest' });
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }

      const { data } = await axios.post(
        `${server}/contact`,
        {name, email, message},
        config
      );

      dispatch({
        type: 'contactUsSuccess',
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: 'contactUsFail',
        payload: error.response.data.message,
      });
    }
  };
