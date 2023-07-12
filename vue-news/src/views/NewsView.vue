<template>
  <div>
    <div v-for="(news, i) in fetchNews" :key="i">
      {{ news.title }}
    </div>
  </div>
</template>

<script>
// import { getNewsList } from "../api/index.js";
// import { mapState } from "vuex";
import { mapGetters } from "vuex";
export default {
  computed: {
    // ...mapState({
    //   ask: state => state.ask, //
    //   // ask라는 변수에 state를가지고, ask를 담음.
    // }),
    // ...mapGetters({
    //   fetchNews: "fetchNews", //fetchNews
    // }),
    ...mapGetters(["fetchNews"]),
  },
  created() {
    // getNewsList().then(res => (this.news = res.data));
    this.$store.dispatch("FETCH_NEWS_LIST");
  },
};
</script>

<style></style>
