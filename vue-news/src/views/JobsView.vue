<template>
  <div>
    <div v-for="(jobs, i) in jobs" :key="i">{{ jobs.title }}</div>
  </div>
</template>

<script>
import { getJobs } from "../api/index.js";
export default {
  data() {
    return {
      jobs: [],
    };
  },
  created() {
    getJobs().then(res => (this.jobs = res.data));
  },
};
</script>

<style></style>
