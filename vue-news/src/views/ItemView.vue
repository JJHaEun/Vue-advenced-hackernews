<template>
  <div>
    <section>
      <!--  질문 상세정보 -->
      <h3>{{ items.title }}</h3>
      <small>
        <p>
          {{ items.points }} points by
          <!-- <i class="fa fa-user" aria-hidden="true"></i>
          <router-link :to="`/user/${items.user}`">
            {{ items.user }}
             </router-link> -->
          <!-- {{ items.time_ago }} -->
          <user-profile :infoUser="items">
            <div slot="username">
              <router-link :to="`/user/${items.user}`">
                {{ items.user }}
              </router-link>
            </div>
            <template slot="created">{{ items.time_ago }}</template>
          </user-profile>
        </p>
      </small>
    </section>
    <section>
      <!-- 답변  -->
      <div v-html="items.content"></div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import UserProfile from "../components/UserProfile.vue";

export default {
  components: {
    UserProfile,
  },
  computed: {
    // 방법1=>items(){
    // return this.$store.state.items
    // }

    // 방법2=> 여기는 이 방법을 사용해봄(응용)
    ...mapState({
      items: state => state.items,
    }),
  },
  // 방법3 =>
  // ...mapGetters(["store의 getters에서 선언한 이름"]) // 이렇게 만들어서 이 이름을 사용.
  //   },
  created() {
    const itemId = this.$route.params.itemId;
    this.$store.dispatch("FETCH_ITEMS", itemId);
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
