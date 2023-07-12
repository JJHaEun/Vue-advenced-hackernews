<template>
  <div>
    <div v-for="(jobs, i) in this.$store.state.jobs" :key="i">
      {{ jobs.title }}
    </div>
  </div>
</template>

<script>
// import { getJobs } from "../api/index.js";
export default {
  created() {
    // getJobs().then(res => (this.jobs = res.data));
    this.$store.dispatch("FETCH_JOBS_LIST");
  },
};
</script>

<style></style>
