export const getters = {
  Coaches(state) {
    return state.coachesList;
  },

  hasCoaches(state) {
    return state.coachesList && state.coachesList.length > 0;
  },
};
