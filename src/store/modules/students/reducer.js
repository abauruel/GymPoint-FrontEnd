import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  students: [],
  student: null,
};
export default function student(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.profile = action.payload.user;
      });
    case '@auth/SIGN_OUT':
      return produce(state, draft => {
        draft.profile = null;
      });
    case '@student/SHOW':
      return produce(state, draft => {
        draft.student = action.payload.student;
      });
    case '@student/UPDATE_SUCCESS':
      return produce(state, draft => {
        draft.students = null;
      });
    default:
      return state;
  }
}
