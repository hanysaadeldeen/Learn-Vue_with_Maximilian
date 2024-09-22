export default {
  GetspecificRquests(state, _, rootGetters) {
    const coachId = rootGetters.userId;
    return state.requestsList.filter((request) => request.coachId === coachId);
  },
  hasRequests(_, getters) {
    return getters.GetspecificRquests && getters.GetspecificRquests.length > 0;
  },
};
