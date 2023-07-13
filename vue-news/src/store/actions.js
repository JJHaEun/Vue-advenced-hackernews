import { getNewsList, getAskList, getJobs } from "../api/index.js";

export default {
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
};
