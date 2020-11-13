/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';
import actionTypes from 'utils/actionTypes';
import { PENDING, SUCCESS, FAILURE } from 'consts/index';
import { normalize } from 'utils/normalizeById';

const slice = createSlice({
  name: 'todos',
  initialState: {
    collection: {},
    status: '',
  },
  reducers: {
    fetchTodos: (state) => {
      state.status = PENDING;
    },
    fetchTodosSuccess: (state, { payload }) => {
      state.status = SUCCESS;
      state.collection = normalize(payload.data);
    },
    fetchTodosFailure: (state, { payload }) => {
      state.status = FAILURE;
    },
  },
});

export const actions = actionTypes(slice.actions);

export default slice.reducer;
