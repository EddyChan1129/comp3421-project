import Cookies from "js-cookie";

export const state = () => ({
  user: null,
});

export const mutations = {
  setUser(state, payload) {
    state.userjwt = payload;
    Cookies.set("userjwt", payload);
  },
  logout(state) {
    state.userjwt = null;
    Cookies.remove("userjwt");
  },
};

export const getters = {
  getUserJwt(state) {
    if (state.userjwt) {
      return "Bearer " + state.userjwt;
    } else {
      return null;
    }
  },
};
