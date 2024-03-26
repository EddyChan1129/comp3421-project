import cookieparser from "cookieparser";

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req && req.headers && req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie);

      if (parsed.userjwt == "null") commit("auth/setUser", null);
      else commit("auth/setUser", parsed.userjwt);
    }

    let cart = []
    if (req && req.headers && req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        cart = (parsed.cart && JSON.parse(parsed.cart)) || []
      } catch (e) {
        console.error('Error parsing cart:', e)
      }
    }
    commit('cart/setItems', cart)

  },

};
