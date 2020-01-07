export function StudentFailure() {
  return {
    type: '@student/FAILURE',
  };
}

export function StudentUpdateRequest(id) {
  return {
    type: '@student/UPDATE_REQUEST',
    payload: { id },
  };
}
export function StudentUpdatedRequest(id, student) {
  return {
    type: '@student/UPDATED_REQUEST',
    payload: { id, student },
  };
}
export function StudentUpdatedSuccess() {
  return {
    type: '@student/UPDATED_SUCCESS',
  };
}

export function studentDelete(id) {
  return {
    type: '@student/DELETE',
    payload: { id },
  };
}
export function ShowStudent(student) {
  return {
    type: '@student/SHOW',
    payload: { student },
  };
}
