export default {
  getToken(state) {
    return state.token;
  },
  userId(state) {
    return state.userId;
  },
  isAuthenticated(state) {
    return !!state.token;
  },
};
