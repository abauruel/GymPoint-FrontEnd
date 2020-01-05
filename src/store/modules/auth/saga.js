// eslint-disable-next-line object-curly-newline
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';
import { signInFailure, signInSuccess } from './actions';

export function* singIn({ payload }) {
  const { email, password } = payload;
  try {
    const response = yield call(api.post, 'session', {
      email,
      password,
    });
    const { user, token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  } catch (error) {
    toast.error('FALHA AO REALIZAR O LOGIN, verifique seus dados');
    yield put(signInFailure());
  }
}
export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', singIn),
  takeLatest('persist/REHYDRATE', setToken),
]);
