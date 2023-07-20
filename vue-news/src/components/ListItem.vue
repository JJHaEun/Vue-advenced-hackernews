<template>
  <div>
    <ul class="news-list">
      <li v-for="(news, i) in fetchNews" :key="i" class="post">
        <!-- news에 있는 data를 href애 연결 => v-bind사용 => v-bind:href="news.url" 또는 :href="news.url" -->
        <a :href="news.url">{{ news.title }}</a>
        <small
          >{{ news.time_ago }} by
          <router-link :to="`/user/${news.user}`">{{ news.user }}</router-link>
        </small>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
</style>
