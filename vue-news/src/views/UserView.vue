<template>
  <div>
    <!-- <p>{{ fetchUsers.id }}</p>
    <p>{{ fetchUsers.created }}</p>
    <p>{{ fetchUsers.karma }}</p>
    <p>{{ fetchUsers.about }}</p> -->
    <user-profile></user-profile>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue";

export default {
  components: {
    UserProfile,
  },
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
