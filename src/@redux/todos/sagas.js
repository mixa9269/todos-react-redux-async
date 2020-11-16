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
    method: 'POST',
    url: 'todos',
    data: { title: action.payload },
  });
}

export default function* () {
  yield all([
    takeLatest(actions.fetchTodos, fetchTodosSaga),
    takeEvery(actions.pushTodo, postTodoSaga),
  ]);
}
