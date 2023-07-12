import Vuex from "vuex";
import Vue from "vue";
import { getNewsList, getAskList, getJobs } from "../api/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    asks: [],
    jobs: [],
  },

  actions: {
    FETCH_NEWS_LIST(context) {
      getNewsList()
        .then(res => {
          context.commit("SET_NEWS", res.data);
          console.log(res.data);
        })
        .catch(error => console.log(error));
    },
    FETCH_ASKS_LIST({ commit }) {
      getAskList()
        .then(({ data }) => {
          commit("SET_ASKS", data);
        })
        .catch(error => console.log(error));
    },
    FETCH_JOBS_LIST({ commit }) {
      getJobs()
        .then(({ data }) => {
          commit("SET_JOBS", data);
        })
        .catch(error => console.log(error));
    },
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_ASKS(state, asks) {
      state.asks = asks;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
  },
});
