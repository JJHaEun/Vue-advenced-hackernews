<template>
  <div>
    <small>
      <p>
        <!-- {{ items.points }} points by -->
        <i class="fa fa-user" aria-hidden="true"></i>
        <!-- <router-link :to="`/user/${items.user}`">
            {{ items.user }} </router-link
          >{{ items.time_ago }} -->
      </p>
    </small>
  </div>
</template>

<script>
export default {};
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
