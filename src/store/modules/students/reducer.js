import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  students: [],
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
    case '@student/LIST_SUCCESS':
      return produce(state, draft => {
        draft.students = action.payload.students;
      });
    default:
      return state;
  }
}
