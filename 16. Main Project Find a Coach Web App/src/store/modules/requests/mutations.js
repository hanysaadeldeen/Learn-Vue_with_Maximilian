export const mutations = {
  addRequest(state, payload) {
    state.requestsList.unshift(payload);
  },
  UpdateCoachId(state, payload) {
    state.userId = payload;
  },
};
