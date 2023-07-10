<template>
  <div>
    <div v-for="(ask, i) in asks" :key="i">{{ ask.title }}</div>
  </div>
</template>

<script>
import { getAskList } from "../api/index.js";
export default {
  data() {
    return {
      asks: [],
    };
  },
  created() {
    getAskList().then(res => (this.asks = res.data));
  },
};
</script>

<style></style>
