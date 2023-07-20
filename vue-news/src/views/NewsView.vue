<template>
  <div>
    <ul class="news-list">
      <li v-for="(news, i) in fetchNews" :key="i" class="post">
        <!-- news에 있는 data를 href애 연결 => v-bind사용 => v-bind:href="news.url" 또는 :href="news.url" -->
        <a :href="news.url">{{ news.title }}</a>
        <small
          >{{ news.time_ago }} by
          <router-link :to="`/user/${news.user}`">{{ news.user }}</router-link>
        </small>
      </li>
    </ul>

    <!-- <p v-for="(news, i) in fetchNews" :key="i">
   news에 있는 data를 href애 연결 => v-bind사용 => v-bind:href="news.url" 또는 :href="news.url" 
      <a :href="news.url">{{ news.title }}</a>
      <small
        >{{ news.time_ago }} by
        <router-link :to="`/user/${news.user}`">{{ news.user }}</router-link>
      </small>
    </p> -->
  </div>
</template>

<script>
// import { getNewsList } from "../api/index.js";
// import { mapState } from "vuex";
import { mapGetters } from "vuex";
export default {
  computed: {
    // ...mapState({
    //  방법 1 => ask: state => state.ask, // => 명료함.
    //   // ask라는 변수에 state를가지고, ask를 담음.
    // }),
    // ...mapGetters({
    //  방법 2 => fetchNews: "fetchNews", //fetchNews
    // }),
    ...mapGetters(["fetchNews"]),
  },
  created() {
    // getNewsList().then(res => (this.news = res.data));
    this.$store.dispatch("FETCH_NEWS_LIST");
  },
};
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
</style>
