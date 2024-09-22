export const mutations = {
  addRequest(state, payload) {
    state.requestsList.unshift(payload);
  },
  setRequest(state, payload) {
    state.requestsList = payload;
  },
};
