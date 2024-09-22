export const actions = {
  async RegisterAsCoach({ commit, rootGetters }, payload) {
    const userIdGetter = rootGetters.userId;
    await fetch(
      `https://vue-demo-9ea6e-default-rtdb.firebaseio.com/coaches/${userIdGetter}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(payload),
      }
    );
    commit('registerAsCoach', { payload, id: userIdGetter });
  },

  async loadCoaches(context, payload) {
    if (!payload.ForceRefresh && !context.getters.shouldUpdate) {
      return;
    }
    const response = await fetch(
      `https://vue-demo-9ea6e-default-rtdb.firebaseio.com/coaches.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      return new Error('some Thing went wrong on fetcing');
    }

    const coaches = [];

    for (const key in responseData) {
      const coach = {
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
        id: key,
      };
      coaches.push(coach);
    }

    context.commit('loadAllCoach', coaches);
    context.commit('setFetchTimestamp');
  },
};
