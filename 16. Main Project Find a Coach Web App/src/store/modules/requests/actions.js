export const actions = {
  AddNewRequest({ commit }, payload) {
    const newRequest = {
      id: new Date().toISOString(),
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };
    commit('addRequest', newRequest);
  },
};
