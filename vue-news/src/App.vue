<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";

export default {
  components: {
    "tool-bar": ToolBar,
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

/* Vue Router Transition */

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
