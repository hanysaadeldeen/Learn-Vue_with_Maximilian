export default {
  async signup(context, payload) {
    return context.dispatch('Auth', {
      ...payload,
      mode: 'signUp',
    });
  },

  async signIn(context, payload) {
    return context.dispatch('Auth', {
      ...payload,
      mode: 'signIn',
    });
  },

  async logOut({ commit }) {
    commit('setLogOut');
  },

  async Auth({ commit }, payload) {
    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyANIXx94dGCyynnZRstMTv_7Sf2w-G1oIM';
    if (mode === 'signUp') {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyANIXx94dGCyynnZRstMTv_7Sf2w-G1oIM';
    }
    const mode = payload.mode;
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });
    const responseData = await response.json();
    if (!response.ok) {
      return new Error('someThing Went wrong when signIn');
    }

    commit('setUser', {
      email: responseData.email,
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },
};
