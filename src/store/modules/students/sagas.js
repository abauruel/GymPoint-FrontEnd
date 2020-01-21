// eslint-disable-next-line object-curly-newline
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
    yield put(StudentUpdatedSuccess());
    history.push('/dashboard');
  } catch (error) {
    console.tron.log(error);
  }
}

export function* studentDelete({ payload }) {
  try {
    yield call(api.delete, `student/${payload.id}`);
    yield put(StudentUpdatedSuccess());
    history.push('/dashboard');
  } catch (error) {
    toast.error('Nao foi possivel excluir registro');
    yield put(StudentFailure());
  }
}

export function* studentStore({ payload }) {
  try {
    const { data } = payload;

    yield call(api.post, 'student', {
      ...data,
      weight: Number(data.weight),
      height: Number(data.height),
    });
    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha ao salvar dados');
    yield put(StudentFailure());
  }
}

export default all([
  takeLatest('@student/UPDATE_REQUEST', studentUpdate),
  takeLatest('@student/UPDATED_REQUEST', studentUpdated),
  takeLatest('@student/DELETE', studentDelete),
  takeLatest('@student/ADD_REQUEST', studentStore),
]);
