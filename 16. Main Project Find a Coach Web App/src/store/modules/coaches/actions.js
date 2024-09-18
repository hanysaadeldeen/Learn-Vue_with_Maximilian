export const actions = {
  RegisterAsCoach({ commit, rootState }, payload) {
    commit('registerAsCoach', payload);
    // commit('setUserId', payload.id, { root: true });
    rootState.userId = payload.id;
  },
};
