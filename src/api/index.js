import axios from 'axios';
import { put } from 'redux-saga/effects';
import config from 'config';

export default function* ({ action, method = 'get', url, data, params }) {
  const { payload } = action;
  try {
    const json = yield axios({
      baseURL: config.remoteUrl,
      url,
      method,
      params,
      data,
    }).then((response) => response.data);

    yield put({
      type: `${action.type}Success`,
      payload: {
        data: json,
        inResponseTo: payload,
      },
    });
  } catch ({ message }) {
    yield put({
      type: `${action.type}Failure`,
      payload: {
        err: message,
        inResponseTo: payload,
      },
    });
  }
}
