/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';
import actionTypes from 'utils/actionTypes';
import { PENDING } from 'consts/index';

const slice = createSlice({
  name: 'todos',
  initialState: {
    list: [],
    status: '',
  },
  reducers: {
    fetchTodos: (state) => {
      state.status = PENDING;
    },
  },
});

export const actions = actionTypes(slice.actions);

export default slice.reducer;
