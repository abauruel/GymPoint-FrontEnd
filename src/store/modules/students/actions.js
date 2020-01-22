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

export function StudentUpdateData(id, student) {
  return {
    type: '@student/UPDATE_DATA',
    payload: { id, student },
  };
}
export function StudentUpdateSuccess() {
  return {
    type: '@student/UPDATE_SUCCESS',
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

export function studentAddRequest(data) {
  return {
    type: '@student/ADD_REQUEST',
    payload: { data },
  };
}
