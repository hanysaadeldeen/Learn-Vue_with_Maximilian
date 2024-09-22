export const mutations = {
  addRequest(state, payload) {
    console.log(payload);
    // state.requestsList.unshift(payload);
  },
  UpdateCoachId(state, payload) {
    state.userId = payload;
  },
};
