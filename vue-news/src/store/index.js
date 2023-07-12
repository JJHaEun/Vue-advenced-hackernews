import Vuex from "vuex";
import Vue from "vue";
import { getNewsList } from "../api/index.js";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
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
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
  },
});
