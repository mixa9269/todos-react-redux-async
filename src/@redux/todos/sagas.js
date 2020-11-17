import { takeLatest, takeEvery, all } from 'redux-saga/effects';
import api from 'api';

import { actions } from './slice';

export function* fetchTodosSaga(action) {
  yield api({
    action,
    method: 'get',
    url: 'todos',
  });
}

export function* postTodoSaga(action) {
  yield api({
    action,
    method: 'post',
    url: 'todos',
    data: { title: action.payload },
  });
}

export function* deleteTodoSaga(action) {
  yield api({
    action,
    method: 'delete',
    url: `todos/${action.payload}`,
  });
}

export function* checkTodoSaga(action) {
  yield api({
    action,
    method: 'patch',
    url: `todos/${action.payload.id}`,
    data: {
      completed: action.payload.value,
    },
  });
}

export default function* () {
  yield all([
    takeLatest(actions.fetchTodos, fetchTodosSaga),
    takeEvery(actions.pushTodo, postTodoSaga),
    takeEvery(actions.deleteTodo, deleteTodoSaga),
    takeEvery(actions.checkTodo, checkTodoSaga),
  ]);
}
