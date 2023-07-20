<template>
  <div>
    <small>
      <i class="fa fa-user" aria-hidden="true"></i>
      <p>{{ infoUser.id }}</p>
      <p>{{ infoUser.created }}</p>
      <p>{{ infoUser.karma }}</p>
      <p>{{ infoUser.about }}</p>
    </small>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";

export default {
  // 3. props로 넘겨받기
  props: {
    // 넘겨받은 props이름 : 타입 또는
    infoUser: Object,
  },
  // props:[넘겨받은 props이름]
  //   computed: {
  //     // 1. store에서 꺼내기 1번방법 :  ...mapGetters(["fetchUsers"]), // this.$store.state.users
  //     // 2. store에서 꺼내기 2번 방법 :
  // fetchUsers() {
  //   return this.$store.state.users;
  // },
  //   },
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
