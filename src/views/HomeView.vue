<template>
  <div class="container">
    <br />
    <div class="text-center">
      <h1>{{ message }}</h1>
    </div>
    <br />
    <movie-search></movie-search>
    <router-link to="/movie"><h3>영화 목록</h3></router-link>
  </div>
</template>

<script>
import MovieSearch from "@/components/movie/MovieSearch.vue";
export default {
  name: "UserHome",
  data() {
    return {
      message: "영화 정보 사이트에 오신것을 환영합니다.",
    };
  },
  components: {
    MovieSearch,
  },
};
</script>
<style>
.text-center {
  text-align: center;
}
</style>
