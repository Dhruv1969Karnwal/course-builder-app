import { server } from '../Store';
import axios from 'axios';

export const updateProfile =  (name, email) => async dispatch => {
  try {
    dispatch({
      type: 'updateProfileRequest',
    });
   const {data} =  await axios.put(`${server}/updateprofile`,{
    name,
    email,
   },{
    headers:{
        "Content-Type":"application/json",
    },
    withCredentials:true,
   })
    dispatch({
      type: 'updateProfileSuccess',payload:data.message
    });
  } catch (err) {
    dispatch({
      type: 'updateProfileFail',
      payload: err.response.data.message,
    });
  }
};


