import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';
import { StudentFailure, ShowStudent, StudentUpdatedSuccess } from './actions';

export function* studentUpdate({ payload }) {
  try {
    const response = yield call(api.get, `student/${payload.id}`);
    yield put(ShowStudent(response.data));
    history.push('/editarAluno');
  } catch (error) {
    toast.error('falha ao carregar lista');
    yield put(StudentFailure());
  }
}

export function* studentUpdated({ payload }) {
  try {
    yield call(api.put, `student/${payload.id}`, payload.student);
    // yield put(StudentUpdatedSuccess());
    history.push('/dashboard');
  } catch (error) {
    console.tron.log(error);
  }
}

export default all([
  takeLatest('@student/UPDATE_REQUEST', studentUpdate),
  takeLatest('@student/UPDATED_REQUEST', studentUpdated),
]);
