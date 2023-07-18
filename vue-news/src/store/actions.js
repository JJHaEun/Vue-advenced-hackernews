import {
  getNewsList,
  getAskList,
  getJobs,
  getUserInfo,
  getAskItems,
} from "../api/index.js";

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
  FETCH_USER({ commit }, user) {
    getUserInfo(user)
      .then(({ data }) => {
        // api요청으로 받아온 data(res.data지만 구조분해할당으로 바로 data로 적어줄 수 있음.)
        commit("SET_USERS", data); // 해당 결과 data를 mutation을 통해 state에 담음.
      })
      .catch(error => console.log(error));
  },

  FETCH_ITEMS({ commit }, itemId) {
    getAskItems(itemId)
      .then(({ data }) => {
        commit("SET_ITEMS", data);
        console.log(data);
      })
      .catch(error => console.log(error));
  },
};
