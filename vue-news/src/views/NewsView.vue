<template>
  <div>
    <div v-for="(news, i) in news" :key="i">{{ news.title }}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      news: [],
    };
  },
  created() {
    axios
      .get("https://api.hnpwa.com/v0/news/1.json")
      .then(res => {
        console.log(res.data);
        this.news = res.data;
      })
      .catch(error => console.log(error));
  },
};
</script>

<style></style>
