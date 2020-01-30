import { all } from 'redux-saga/effects';
import auth from './auth/saga';
import student from './students/sagas';
import plan from './plans/sagas';

export default function* rootSaga() {
  yield all([auth, student, plan]);
}
