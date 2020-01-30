export function AddPlan(data) {
  return {
    type: '@plan/ADD_PLAN_REQUEST',
    payload: { data },
  };
}
