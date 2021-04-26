import axios from "axios";

export default {
  async authenticate({ commit }, credentials) {
    try {
      const authenticated = await axios.post("/api/authenticate", credentials);

      commit("SET_AUTHENTICATED", authenticated);
    } catch (error) {
      throw Error("API Error occurred.");
    }
  }
};
