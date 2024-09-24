export default {
  async signup({ commit }, payload) {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyANIXx94dGCyynnZRstMTv_7Sf2w-G1oIM',
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const responseData = await response.json();
    if (!response.ok) {
      return new Error('someThing Went wrong when signIn');
    }
    commit('SignUpToken', {
      email: responseData.email,
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },

  async signIn({ commit }, payload) {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyANIXx94dGCyynnZRstMTv_7Sf2w-G1oIM',
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      return new Error('someThing Went wrong when signIn');
    }
    commit('SignInToken', {
      email: responseData.email,
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },
};
