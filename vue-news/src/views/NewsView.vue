<template>
  <div>
    <div v-for="(news, i) in news" :key="i">{{ news.title }}</div>
  </div>
</template>

<script>
import { getNewsList } from "../api/index.js";
export default {
  data() {
    return {
      news: [],
    };
  },
  created() {
    getNewsList().then(res => (this.news = res.data));
  },
};
</script>

<style></style>
