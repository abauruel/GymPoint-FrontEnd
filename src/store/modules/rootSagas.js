import { all } from 'redux-saga/effects';
import auth from './auth/saga';
import student from './students/sagas';

export default function* rootSaga() {
  yield all([auth, student]);
}
