export function listStudentsRequest() {
  return {
    type: '@students/LIST_REQUEST',
  };
}

export function listStudentsSuccess(students) {
  return {
    type: '@student/LIST_SUCCESS',
    payload: { students },
  };
}

export function StudentFailure() {
  return {
    type: '@student/FAILURE',
  };
}
