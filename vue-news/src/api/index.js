import axios from "axios";

// 1. HTTP기본 Request, Response관련된 기본설정.
const config = {
  baseURL: "https://api.hnpwa.com/v0/",
};

// 2. API함수들 정리
const getNewsList = () => {
  return axios.get(`${config.baseURL}news/1.json`);
};

const getAskList = () => {
  return axios.get(`${config.baseURL}ask/1.json`);
};

const getJobs = () => {
  return axios.get(`${config.baseURL}jobs/1.json`);
};
export { getNewsList, getAskList, getJobs };
