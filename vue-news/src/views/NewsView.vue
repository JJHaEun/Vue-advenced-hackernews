<template>
  <div>
    <div v-for="(news, i) in this.$store.state.news" :key="i">
      {{ news.title }}
    </div>
  </div>
</template>

<script>
// import { getNewsList } from "../api/index.js";
export default {
  created() {
    // getNewsList().then(res => (this.news = res.data));
    this.$store.dispatch("FETCH_NEWS_LIST");
  },
};
</script>

<style></style>
