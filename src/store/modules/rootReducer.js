import { combineReducers } from 'redux';

import auth from './auth/reducer';
import student from './students/reducer';

const reducers = combineReducers({ auth, student });

export default reducers;
