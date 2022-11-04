import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomeView.vue";
import MovieList from "../components/movie/MovieList.vue";
import MovieView from "../views/MovieView.vue";
import MovieCreate from "../components/movie/MovieCreate.vue";
import MovieDetail from "../components/movie/MovieDetail.vue";
import ReviewList from "../components/review/ReviewList.vue";
import ReviewCreate from "../components/review/ReviewCreate.vue";
import LoginForm from "@/components/LoginForm.vue";
import UserRegist from "@/components/user/UserRegist.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/regist",
    name: "Regist",
    component: UserRegist,
  },

  {
    path: "/login",
    name: "Login",
    component: LoginForm,
  },
  {
    path: "/movie",
    name: "Movie",
    component: MovieView,
    children: [
      {
        path: "",
        name: "MovieList",
        component: MovieList,
      },
      {
        path: "/create",
        name: "MovieCreate",
        component: MovieCreate,
      },
      {
        path: "/:id",
        name: "MovieDetail",
        component: MovieDetail,
        children: [
          {
            path: "",
            name: "ReviewList",
            component: ReviewList,
          },
          {
            path: "",
            name: "ReviewCreate",
            component: ReviewCreate,
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
