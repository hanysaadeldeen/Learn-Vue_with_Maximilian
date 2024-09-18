export default {
  AllRequest(state) {
    return state.requestsList;
  },

  GetspecificRquests(state, _, rootState) {
    const listRequest = state.requestsList;
    const coachId = rootState.userId;
    return listRequest.filter((request) => request.coachId === coachId);
  },
};
