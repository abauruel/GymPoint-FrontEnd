import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';

import { listStudentsSuccess, StudentFailure } from './actions';

export function* listStudents() {
  try {
    const response = yield call(api.get, 'students');
    yield put(listStudentsSuccess(response.data));
  } catch (error) {
    toast.error('falha ao carregar lista');
    yield put(StudentFailure());
  }
}

export default all([takeLatest('@students/LIST_REQUEST', listStudents)]);
