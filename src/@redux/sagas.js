import { all } from 'redux-saga/effects';

import todos from './todos/sagas';

export default function* (): any {
  yield all([todos()]);
}
