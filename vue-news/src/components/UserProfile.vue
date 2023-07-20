<template>
  <div>
    <small>
      <i class="fa fa-user" aria-hidden="true"></i>
      <p>{{ fetchUsers.id }}</p>
      <p>{{ fetchUsers.created }}</p>
      <p>{{ fetchUsers.karma }}</p>
      <p>{{ fetchUsers.about }}</p>
    </small>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";

export default {
  computed: {
    // ...mapGetters(["fetchUsers"]), // this.$store.state.users
    fetchUsers() {
      return this.$store.state.users;
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
a:link {
  /* 한번도 클릭하지 않은경우 */
  color: black;
}
a:visited {
  color: black;
}
a:hover {
  color: black;
}
a:active {
  color: black;
}
</style>
