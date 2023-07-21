<template>
  <div>
    <!-- <p>{{ fetchUsers.id }}</p>
    <p>{{ fetchUsers.created }}</p>
    <p>{{ fetchUsers.karma }}</p>
    <p>{{ fetchUsers.about }}</p> -->
    <user-profile :infoUser="fetchUserInfo">
      <p slot="username">{{ fetchUserInfo.id }}</p>
      <p slot="created">{{ fetchUserInfo.created }}</p>
    </user-profile>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue";

export default {
  components: {
    UserProfile,
  },
  // props로 내리기
  computed: {
    fetchUserInfo() {
      return this.$store.state.users;
    },
  },

  // computed: {
  //   ...mapGetters(["fetchUsers"]), // this.$store.state.users
  // },
  // this.$route.params.id
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userName);
  },
};
</script>

<style></style>
