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
    commit('registerAsCoach', payload);
  },

  async loadCoaches({ commit }) {
    const response = await fetch(
      `https://vue-demo-9ea6e-default-rtdb.firebaseio.com/coaches.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      // return;
    }

    const coaches = [];

    for (const key in responseData) {
      const coach = {
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
        id: responseData[key].id,
      };
      coaches.push(coach);
    }

    console.log(coaches && coaches);

    commit('loadAllCoach', coaches);
  },
};
