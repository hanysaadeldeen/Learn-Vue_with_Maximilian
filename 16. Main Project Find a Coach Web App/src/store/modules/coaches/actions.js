export const actions = {
  async RegisterAsCoach({ commit, rootState, rootGetters }, payload) {
    rootState.userId = payload.id;
    const userIdGetter = rootGetters.userId;
    console.log(userIdGetter);

    await fetch(
      `https://vue-demo-9ea6e-default-rtdb.firebaseio.com/coaches/${userIdGetter}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(payload),
      }
    );

    commit('registerAsCoach', payload);
  },
};
