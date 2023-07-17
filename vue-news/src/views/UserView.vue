<template>
  <div>
    <p>{{ fetchUsers.id }}</p>
    <p>{{ fetchUsers.created }}</p>
    <p>{{ fetchUsers.karma }}</p>
    <p>{{ fetchUsers.about }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchUsers"]),
  },
  // this.$route.params.id
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userName);
  },
};
</script>

<style></style>
