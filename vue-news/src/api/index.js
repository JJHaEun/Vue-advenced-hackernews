import axios from "axios";
const config = {
  baseURl: "https://api.hnpwa.com/v0/",
};

const getNewsList = () => {
  return axios.get(`${config.baseURLnews}/1.json`);
};
