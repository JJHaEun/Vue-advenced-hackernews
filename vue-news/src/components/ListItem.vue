<template>
  <div>
    <ul class="news-list">
      <li v-for="(item, i) in listItems" :key="i" class="post">
        <!-- news에 있는 data를 href애 연결 => v-bind사용 => v-bind:href="news.url" 또는 :href="news.url" -->
        <!-- <a :href="news.url">{{ item.title }}</a>
        <small
          >{{ news.time_ago }} by
          <router-link :to="`/user/${news.user}`">{{ news.user }}</router-link>
        </small> -->
      </li>
    </ul>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";

export default {
  computed: {
    // ...mapState({
    //  방법 1 => ask: state => state.ask, // => 명료함.
    //   // ask라는 변수에 state를가지고, ask를 담음.
    // }),
    // ...mapGetters({
    //  방법 2 => fetchNews: "fetchNews", //fetchNews
    // }),
    // ...mapGetters(["fetchNews"]),
    listItems() {
      const name = this.$route.name;

      if (name === "news") {
        return this.$store.state.news;
      } else if (name === "ask") {
        return this.$store.state.asks;
      } else if (name === "jobs") {
        return this.$store.state.jobs;
      } else {
        return {};
      }
    },
  },
  created() {
    // getNewsList().then(res => (this.news = res.data));
    const name = this.$route.name;

    if (name === "news") {
      this.$store.dispatch("FETCH_NEWS_LIST");
    } else if (name === "ask") {
      this.$store.dispatch("FETCH_ASKS_LIST");
    } else if (name === "jobs") {
      this.$store.dispatch("FETCH_JOBS_LIST");
    }
    console.log(this.$route);
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
