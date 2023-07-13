import Vuex from "vuex";
import Vue from "vue";
import mutations from "./mutations.js";
import actions from "./actions.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    asks: [],
    jobs: [],
  },
  getters: {
    fetchNews(state) {
      return state.news;
    },
    fetchAsk(state) {
      return state.asks;
    },
    fetchJobs({ jobs }) {
      return jobs;
    },
  },
  actions,
  mutations,
});
