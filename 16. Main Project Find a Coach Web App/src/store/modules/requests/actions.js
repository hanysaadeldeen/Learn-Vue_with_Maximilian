export const actions = {
  async AddNewRequest({ commit }, payload) {
    const newRequest = {
      // id: new Date().toISOString(),
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };

    const response = await fetch(
      `https://vue-demo-9ea6e-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        data: JSON.stringify(newRequest),
      }
    );
    const responseData = await response.json();
    if (response.ok) {
      return new Error('someThing wrong at sending a request');
    }
    newRequest.id = responseData.name;
    commit('addRequest', newRequest);
  },
  SpecificIdCoach({ commit }, payload) {
    commit('UpdateCoachId', payload);
  },
};
