export const actions = {
  async AddNewRequest({ commit }, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };

    const response = await fetch(
      `https://vue-demo-9ea6e-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      return new Error('someThing wrong at sending a request');
    }
    newRequest.id = responseData.name;
    commit('addRequest', newRequest);
  },

  async fetchAllRequest(context) {
    const coachId = context.rootGetters.userId;

    if (!context.rootGetters['coaches/shouldUpdate']) {
      return;
    }
    const response = await fetch(
      `https://vue-demo-9ea6e-default-rtdb.firebaseio.com/requests/${coachId}.json`
    );
    const responseData = await response.json();
    if (!response.ok) {
      return new Error('someThing weng wrong when fetching request');
    }
    const requests = [];
    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        message: responseData[key].message,
        userEmail: responseData[key].userEmail,
      };
      requests.push(request);
    }

    context.commit('setRequest', requests);
  },
};
