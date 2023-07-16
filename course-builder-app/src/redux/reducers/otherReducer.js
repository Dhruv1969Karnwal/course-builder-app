import { createReducer } from '@reduxjs/toolkit';

export const otherReducer = createReducer(
  {},
  {
    contactUsRequest: state => {
      state.loading = true;
    },
    contactUsSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload
    },
    contactUsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: state => {
        state.error = null;
      },
      clearMessage: state => {
        state.message = null;
      },
  }
);
