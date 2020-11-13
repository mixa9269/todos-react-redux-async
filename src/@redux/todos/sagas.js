import { takeLatest, all } from 'redux-saga/effects';
import api from 'api';

import { actions } from './slice';

export function* fetchTodosSaga(action) {
  yield api({
    action,
    method: 'get',
    url: 'todos',
  });
}

export default function* () {
  yield all([takeLatest(actions.fetchTodos, fetchTodosSaga)]);
}
