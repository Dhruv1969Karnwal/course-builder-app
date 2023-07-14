import { server } from '../Store';
import axios from 'axios';

export const updateProfile = (name, email) => async dispatch => {
  try {
    dispatch({
      type: 'updateProfileRequest',
    });
    const { data } = await axios.put(
      `${server}/updateprofile`,
      {
        name,
        email,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    dispatch({
      type: 'updateProfileSuccess',
      payload: data.message,
    });
  } catch (err) {
    dispatch({
      type: 'updateProfileFail',
      payload: err.response.data.message,
    });
  }
};
export const changePassword = (oldPassword, newPassword) => async dispatch => {
  try {
    dispatch({
      type: 'changePasswordRequest',
    });
    const { data } = await axios.put(
      `${server}/changepassword`,
      {
        oldPassword,
        newPassword,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    dispatch({
      type: 'changePasswordSuccess',
      payload: data.message,
    });
  } catch (err) {
    dispatch({
      type: 'changePasswordFail',
      payload: err.response.data.message,
    });
  }
};
export const forgetPassword = email => async dispatch => {
  try {
    dispatch({
      type: 'forgetPasswordRequest',
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    };
    const { data } = await axios.post(
      `${server}/forgetpassword`,
      {
        email,
      },
      config
    );
    dispatch({
      type: 'forgetPasswordSuccess',
      payload: data.message,
    });
  } catch (err) {
    dispatch({
      type: 'forgetPasswordFail',
      payload: err.response.data.message,
    });
  }
};
export const resetPassword = (token, password) => async dispatch => {
  try {
    dispatch({
      type: 'resetPasswordRequest',
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    }
    const { data } = await axios.put(
      `${server}/resetpassword/${token}`,
      {
        password
      },
      config
    );
    dispatch({
      type: 'resetPasswordSuccess',
      payload: data.message,
    });
  } catch (err) {
    dispatch({
      type: 'resetPasswordFail',
      payload: err.response.data.message,
    });
  }
};

export const updateProfilePicture = formdata => async dispatch => {
  try {
    dispatch({
      type: 'updateProfilePictureRequest',
    });
    const { data } = await axios.put(
      `${server}/updateprofilepicture`,
      formdata,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );
    dispatch({
      type: 'updateProfilePictureSuccess',
      payload: data.message,
    });
  } catch (err) {
    dispatch({
      type: 'updateProfilePictureFail',
      payload: err.response.data.message,
    });
  }
};
