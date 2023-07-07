import VueRouter from "vue-router";
import Vue from "vue";
import JobsView from "../views/JobsView.vue";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history", // nomal한 url생성하기위해 추가해줌.
  routes: [
    {
      path: "/",

      // 첫 접속하자마자 보여줄 페이지 주소
      redirect: "/news",
    },
    {
      // path 에는 url 정보가(url주소),
      // component에는 해당 컴포넌트가 들어감.(url주소로 이동했을때 표시할 컴포넌트(페이지))
      path: "/news",
      component: NewsView,
    },
    {
      path: "/ask",
      component: AskView,
    },
    {
      path: "/jobs",
      component: JobsView,
    },
  ],
});
