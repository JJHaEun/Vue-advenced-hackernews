<template>
  <div>
    <ul class="ask-list">
      <li v-for="(ask, i) in fetchAsk" :key="i">
        <router-link v-bind:to="`/items/${ask.id}`">
          {{ ask.title }}
        </router-link>
        <small>{{ ask.user }}</small>
      </li>
    </ul>
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

<style scoped>
.ask-list {
  margin: 0;
  padding: 0;
}
</style>
