export default {
  Coaches(state) {
    return state.coachesList;
  },
  hasCoaches(state) {
    return state.coachesList && state.coachesList.length > 0;
  },
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.Coaches;
    const userId = rootGetters.userId;

    return coaches.some((coach) => coach.id === userId);
  },

  shouldUpdate(state) {
    const lastFetch = state.lastfetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    if ((currentTimeStamp - lastFetch) / 1000 > 60) {
      return true;
    } else {
      return false;
    }
  },
};
