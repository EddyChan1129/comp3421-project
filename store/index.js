import cookieparser from "cookieparser";

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req && req.headers && req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie);

      if (parsed.userjwt == "null") commit("auth/setUser", null);
      else commit("auth/setUser", parsed.userjwt);
    }
  },
};

/* export const state = {
  x: "hello",
};

export const getters = {
  editX(state) {
    return state.x + " edited";
  },
};

export const mutations = {
  addX(state, payload) {
    state.x = payload;
  },
};

export const actions = {
  actionX(context, payload) {
    context.commit("addX", payload);
  },
  async getIp(context) {
    let ip = await this.$axios.$get("https://icanhazip.com");
    context.commit("addX", ip);
  },
};
 */
