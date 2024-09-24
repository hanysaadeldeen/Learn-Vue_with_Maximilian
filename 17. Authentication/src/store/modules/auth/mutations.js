export default {
  SignUpToken(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.tokenExpiration = payload.tokenExpiration;
  },

  SignInToken(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.tokenExpiration = payload.tokenExpiration;
  },
  setLogOut(state) {
    state.token = null;
    state.userId = null;
    state.tokenExpiration = null;
  },
};
