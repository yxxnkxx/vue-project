<template>
  <div class="container">
    <h2>영화 목록</h2>
    <h4>등록된 영화의 수 : {{ movieCnt }}</h4>
    <div v-if="movies.length">
      <table class="table">
        <colgroup>
          <col style="width: 5%" />
          <col style="width: 40%" />
          <col style="width: 20%" />
          <col style="width: 20%" />
          <col style="width: 15%" />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>감독</th>
            <th>개봉날짜</th>
            <th>상영시간</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="movie in movies" :key="movie.id">
            <td>{{ movie.id }}</td>
            <td>
              <router-link class="movie-link" :to="`/${movie.id}`">{{
                movie.title
              }}</router-link>
            </td>
            <td>{{ movie.director }}</td>
            <td>{{ movie.date }}</td>
            <td>{{ movie.runningTime }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>등록된 영화가 없습니다.</div>
    <div>
      <router-link to="/create"> <h3>영화 등록</h3></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieList",
  props: {
    movies: {
      type: Array,
    },
  },
  methods: {},
  computed: {
    movieCnt() {
      return this.movies.length;
    },
  },
};
</script>

<style></style>
