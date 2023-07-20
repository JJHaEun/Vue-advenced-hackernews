<template>
  <div>
    <ul class="jobs-list">
      <li v-for="(jobs, i) in fetchJobs" :key="i">
        <a :href="jobs.url">{{ jobs.title }}</a>
        <small>{{ jobs.time_ago }} by {{ jobs.domain }}</small>
      </li>
    </ul>
  </div>
</template>

<script>
// import { getJobs } from "../api/index.js";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchJobs"]),
  },
  created() {
    // getJobs().then(res => (this.jobs = res.data));
    this.$store.dispatch("FETCH_JOBS_LIST");
  },
};
</script>

<style scoped>
.jobs-list {
  margin: 0;
  padding: 0;
}
</style>
