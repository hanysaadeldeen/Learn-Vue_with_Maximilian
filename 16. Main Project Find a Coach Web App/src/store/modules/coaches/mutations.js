export const mutations = {
  registerAsCoach(state, payload) {
    state.coachesList.unshift(payload);
  },
};
