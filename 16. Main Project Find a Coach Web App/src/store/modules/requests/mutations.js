export const mutations = {
  addRequest(state, payload) {
    state.requestsList.unshift(payload);
  },
};
