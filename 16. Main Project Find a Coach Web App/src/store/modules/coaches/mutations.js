export const mutations = {
  registerAsCoach(state, payload) {
    state.coachesList.unshift(payload);
  },

  loadAllCoach(state, payload) {
    state.coachesList = payload;
  },

  setFetchTimestamp(state) {
    state.lastfetch = new Date().getTime();
  },
};
