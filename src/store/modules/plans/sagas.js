import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';

export function* addPlan({ payload }) {
  try {
    const { data } = payload;
    const { title, duration, monthprice: price } = data;
    yield call(api.post, 'plan', { title, duration, price: Number(price) });
    history.push('/Planos');
  } catch (err) {
    toast.error('Nao foi possivel adicionar novo Plano');
  }
}

export default all([takeLatest('@plan/ADD_PLAN_REQUEST', addPlan)]);
