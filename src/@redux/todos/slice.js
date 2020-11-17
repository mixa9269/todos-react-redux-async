import { createSlice } from '@reduxjs/toolkit';
import actionTypes from 'utils/actionTypes';
import { PENDING, SUCCESS, FAILURE } from 'consts/index';
import { normalize } from 'utils/normalizeById';

const slice = createSlice({
  name: 'todos',
  initialState: {
    collection: {},
    status: '',
    newTodo: '',
  },
  reducers: {
    fetchTodos: (state) => {
      state.status = PENDING;
    },
    fetchTodosSuccess: (state, { payload }) => {
      state.status = SUCCESS;
      state.collection = normalize(payload.data);
    },
    fetchTodosFailure: (state) => {
      state.status = FAILURE;
    },
    changeNewTodo: (state, { payload }) => {
      state.newTodo = payload;
    },
    pushTodo: (state) => state,
    pushTodoSuccess: (state, { payload: { data } }) => {
      state.newTodo = '';
      state.collection[data.id] = data;
    },
    deleteTodo: (state, { payload }) => {
      delete state.collection[payload];
    },
    deleteTodoSuccess: (state) => state,
    checkTodo: (state, { payload: { id, value } }) => {
      state.collection[id].completed = value;
    },
  },
});

export const actions = actionTypes(slice.actions);

export default slice.reducer;
