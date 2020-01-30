import { combineReducers } from 'redux';

import auth from './auth/reducer';
import student from './students/reducer';
import plans from './plans/reducer';

const reducers = combineReducers({ auth, student, plans });

export default reducers;
