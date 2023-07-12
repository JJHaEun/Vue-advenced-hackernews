<template>
  <div>
    <div v-for="(ask, i) in this.$store.state.asks" :key="i">
      {{ ask.title }}
    </div>
  </div>
</template>

<script>
// import { getAskList } from "../api/index.js";
export default {
  data() {
    return {
      asks: [],
    };
  },
  created() {
    // 컴포넌트가 실행되자마자 실행되는 로직들어감.
    // getAskList().then(res => (this.asks = res.data));
    this.$store.dispatch("FETCH_ASKS_LIST");
  },
};
</script>

<style></style>
