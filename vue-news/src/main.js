import Vue from "vue";
import App from "./App.vue";
import { router } from "./router/index.js";
import { store } from "./store/index.js";
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  // router라는 인스턴스 옵션에 라우터 연결 => router:router => 축약하면 router이됨.
  router,
  store,
}).$mount("#app");
