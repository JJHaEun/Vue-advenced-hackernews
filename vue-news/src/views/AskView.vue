<template>
  <div>
    <div v-for="(ask, i) in fetchAsk" :key="i">
      <a :href="ask.url">{{ ask.title }}</a>
      <small>{{ ask.user }}</small>
    </div>
  </div>
</template>

<script>
// import { getAskList } from "../api/index.js";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchAsk"]),
  },
  created() {
    // 컴포넌트가 실행되자마자 실행되는 로직들어감.
    // getAskList().then(res => (this.asks = res.data));
    this.$store.dispatch("FETCH_ASKS_LIST");
  },
};
</script>

<style></style>
